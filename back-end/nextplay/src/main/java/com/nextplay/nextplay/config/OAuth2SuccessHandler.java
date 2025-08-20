package com.nextplay.nextplay.config;

import com.nextplay.nextplay.model.auth.Role;
import com.nextplay.nextplay.model.auth.User;
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

    public OAuth2SuccessHandler(JwtUtil jwtUtil, UserService userService) {
        this.jwtUtil = jwtUtil;
        this.userService = userService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        DefaultOAuth2User oauthUser = (DefaultOAuth2User) authentication.getPrincipal();
        String email = oauthUser.getAttribute("email");
        String name = oauthUser.getAttribute("name");

        // Kiểm tra user đã có trong DB chưa, nếu chưa thì tạo
        User user = userService.findByMail(email).orElseGet(() -> {
            User u = new User();
            u.setEmail(email);
            u.setUsername(name);
            u.setRole(new Role("USER"));
            return userService.save(u);
        });

        // Tạo JWT
        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().getName());

        // Trả token cho client
        response.setContentType("application/json");
        response.getWriter().write("{\"token\":\"" + token + "\",\"email\":\"" + email + "\",\"role\":\"" + user.getRole() + "\"}");
    }
}

