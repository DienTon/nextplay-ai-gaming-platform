package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.dto.auth.UserBalanceResponse;
import com.nextplay.nextplay.model.auth.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface IUserService {
    User loadUserByUsername(String email);
    Optional<User> findByMail(String mail);
    User save(User user);
    UserBalanceResponse addMoney(String email, Integer amount);
    UserBalanceResponse subtractMoney(String email, Integer amount);
    Integer getUserBalance(String email);
}
