package com.nextplay.nextplay.service.auth;


import com.nextplay.nextplay.model.auth.CustomUserDetails;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.repository.auth.IUserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final IUserRepo userRepository;

    public CustomUserDetailsService(IUserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found: " + email));
        return new CustomUserDetails(user); // nếu bạn có CustomUserDetails
    }
}

