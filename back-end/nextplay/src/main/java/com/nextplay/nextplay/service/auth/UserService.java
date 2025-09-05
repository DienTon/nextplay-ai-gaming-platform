package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.dto.auth.UserBalanceResponse;
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

    public UserBalanceResponse addMoney(String email, Integer amount) {
        try {
            User user = userRepository.findByEmail(email).get();
            if (user == null) {
                return new UserBalanceResponse(false, 0, "User not found");
            }

            // Lấy số dư hiện tại, nếu null thì đặt mặc định là 10000
            Integer currentBalance = user.getBalance() != null ? user.getBalance() : 10000;
            Integer newBalance = currentBalance + amount;

            user.setBalance(newBalance);
            userRepository.save(user);

            return new UserBalanceResponse(true, newBalance, null);
        } catch (Exception e) {
            return new UserBalanceResponse(false, 0, "Error adding money: " + e.getMessage());
        }
    }

    /**
     * Trừ tiền từ tài khoản user
     *
     * @return
     */
    public UserBalanceResponse subtractMoney(String email, Integer amount) {
        try {
            User user = userRepository.findByEmail(email).get();
            if (user == null) {
                return new UserBalanceResponse(false, 0, "User not found");
            }

            // Lấy số dư hiện tại, nếu null thì đặt mặc định là 10000
            Integer currentBalance = user.getBalance() != null ? user.getBalance() : 10000;

            // Không cho phép số dư âm
            Integer newBalance = Math.max(0, currentBalance - amount);

            user.setBalance(newBalance);
            userRepository.save(user);

            return new UserBalanceResponse(true, newBalance, null);
        } catch (Exception e) {
            return new UserBalanceResponse(false, 0, "Error subtracting money: " + e.getMessage());
        }
    }

    public Integer getUserBalance(String email) {
        User user = userRepository.findByEmail(email).get();
        return user.getBalance();
    }


}
