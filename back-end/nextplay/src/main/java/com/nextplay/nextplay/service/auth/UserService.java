package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.repository.auth.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Optional;

@Service
public class UserService implements IUserService{
    @Autowired
    private IUserRepo userRepository;

    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return (User) org.springframework.security.core.userdetails.User.builder()
                .username(user.getEmail())
                .password(user.getPasswordHash()) // nhớ mã hóa bằng BCrypt
                .authorities(Collections.singletonList(() -> "ROLE_" + user.getRole()))
                .build();
    }

    @Override
    public Optional<User> findByMail(String mail) {
        return userRepository.findByEmail(mail);
    }

    @Override
    public User save(User user) {
      return   userRepository.save(user);
    }
}
