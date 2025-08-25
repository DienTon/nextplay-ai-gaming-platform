package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.config.JwtUtil;
import com.nextplay.nextplay.dto.auth.AuthRequest;
import com.nextplay.nextplay.dto.auth.AuthResponse;
import com.nextplay.nextplay.dto.auth.RegisterRequest;
import com.nextplay.nextplay.model.auth.CustomUserDetails;
import com.nextplay.nextplay.service.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "*")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(authService.register(request));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
            String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());
            return ResponseEntity.ok(new AuthResponse(jwt));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai email hoặc mật khẩu");
        }
    }

    @GetMapping("/oauth2/success")
    public ResponseEntity<?> oauth2Success(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        final String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());
        return ResponseEntity.ok(new AuthResponse(jwt));
    }
}
