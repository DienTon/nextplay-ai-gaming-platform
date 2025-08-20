package com.nextplay.nextplay.config;

import com.nextplay.nextplay.model.auth.Role;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.repository.auth.IRoleRepo;
import com.nextplay.nextplay.service.auth.UserService;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class OAuth2SuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final IRoleRepo roleRepo;

    public OAuth2SuccessHandler(JwtUtil jwtUtil, UserService userService, IRoleRepo roleRepo) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
        this.roleRepo = roleRepo;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        DefaultOAuth2User oauthUser = (DefaultOAuth2User) authentication.getPrincipal();
        String email = oauthUser.getAttribute("email");
        String name = oauthUser.getAttribute("name");
        if (email == null) {
            throw new IllegalArgumentException("Google account does not provide email");
        }
        Role userRole = roleRepo.findByName("USER")
                .orElseThrow(() -> new RuntimeException("Default role not found"));

        // Kiểm tra user đã có trong DB chưa, nếu chưa thì tạo
        User user = userService.findByMail(email).orElseGet(() -> {
            User u = new User();
            u.setEmail(email); // chắc chắn không null
            u.setUsername(name != null ? name : "Unknown");
            u.setRole(userRole);
            return userService.save(u);
        });

        // Tạo JWT
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().getName());

        // Trả token cho client
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(
                "{ \"token\": \"" + token + "\", " +
                        "\"email\": \"" + email + "\", " +
                        "\"role\": \"" + user.getRole().getName() + "\" }"
        );
        response.getWriter().flush();


    }
}

