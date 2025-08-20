package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.config.JwtUtil;
import com.nextplay.nextplay.dto.auth.AuthRequest;
import com.nextplay.nextplay.dto.auth.AuthResponse;
import com.nextplay.nextplay.model.auth.CustomUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
        );

        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());

        return ResponseEntity.ok(new AuthResponse(jwt));
    }

    @GetMapping("/oauth2/success")
    public ResponseEntity<?> oauth2Success(Authentication authentication) {
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        final String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());
        return ResponseEntity.ok(new AuthResponse(jwt));
    }
}
