package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.model.auth.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface IUserService {
    User loadUserByUsername(String email);
    Optional<User> findByMail(String mail);
    User save(User user);
}
