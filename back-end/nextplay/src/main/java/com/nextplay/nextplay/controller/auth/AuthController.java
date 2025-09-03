package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.config.JwtUtil;
import com.nextplay.nextplay.dto.auth.AuthRequest;
import com.nextplay.nextplay.dto.auth.AuthResponse;
import com.nextplay.nextplay.dto.auth.RegisterRequest;
import com.nextplay.nextplay.model.auth.CustomUserDetails;
import com.nextplay.nextplay.service.auth.AuthService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
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
            // Log thông tin đăng nhập để debug
            System.out.println("Login attempt for email: " + request.getEmail());

            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );

            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

            // Debug thông tin user
            System.out.println("User authenticated: " + userDetails.getUsername());
            System.out.println("User role: " + userDetails.getUser().getRole().getName());

            // Sử dụng email thay vì username để tạo token
            String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());

            System.out.println("Generated JWT: " + jwt);

            return ResponseEntity.ok(new AuthResponse(jwt,userDetails.getUsername(),userDetails.getUser().getRole().getName()));
        } catch (BadCredentialsException e) {
            System.err.println("Bad credentials for email: " + request.getEmail());
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai email hoặc mật khẩu");
        } catch (Exception e) {
            System.err.println("Login error: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi đăng nhập");
        }
    }

    @GetMapping("/oauth2/success")
    public ResponseEntity<?> oauth2Success(Authentication authentication) {
        try {

            CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();

            // Debug thông tin user
            System.out.println("User authenticated: " + userDetails.getUsername());
            System.out.println("User role: " + userDetails.getUser().getRole().getName());

            // Sử dụng email thay vì username để tạo token
            String jwt = jwtUtil.generateToken(userDetails.getUsername(), userDetails.getUser().getRole().getName());

            System.out.println("Generated JWT: " + jwt);

            return ResponseEntity.ok(new AuthResponse(jwt,userDetails.getUsername(),userDetails.getUser().getRole().getName()));
        } catch (BadCredentialsException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Sai email hoặc mật khẩu");
        } catch (Exception e) {
            System.err.println("Login error: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi đăng nhập");
        }
    }
    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        try {
            String authHeader = request.getHeader("Authorization");
            if (authHeader != null && authHeader.startsWith("Bearer ")) {
                System.out.println("User logged out successfully");
                return ResponseEntity.ok().body("Đăng xuất thành công");
            }
            return ResponseEntity.badRequest().body("Token không hợp lệ");
        } catch (Exception e) {
            System.err.println("Logout error: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Lỗi đăng xuất");
        }
    }
}
