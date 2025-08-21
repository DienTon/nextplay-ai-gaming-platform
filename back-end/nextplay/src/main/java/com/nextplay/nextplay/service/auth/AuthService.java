package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.dto.auth.RegisterRequest;
import com.nextplay.nextplay.dto.auth.AuthRequest;
import com.nextplay.nextplay.dto.auth.AuthResponse;
import com.nextplay.nextplay.model.auth.Role;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.repository.auth.IRoleRepo;
import com.nextplay.nextplay.repository.auth.IUserRepo;
import com.nextplay.nextplay.config.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private IUserRepo userRepo;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private IRoleRepo roleRepo;

    public AuthResponse register(RegisterRequest request) {
        if (userRepo.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("Email already exists");
        }
        Role role = roleRepo.findByName("USER").get();
        User user = new User();
        user.setEmail(request.getEmail());
        user.setPasswordHash(passwordEncoder.encode(request.getPassword()));
        user.setUsername(request.getName());
        // set default role USER
        user.setRole(role);
        userRepo.save(user);
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().toString());
        return new AuthResponse(token);
    }

    public AuthResponse login(AuthRequest request) {
        User user = userRepo.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if (!passwordEncoder.matches(request.getPassword(), user.getPasswordHash())) {
            throw new RuntimeException("Invalid password");
        }
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().toString());
        return new AuthResponse(token);
    }
}
