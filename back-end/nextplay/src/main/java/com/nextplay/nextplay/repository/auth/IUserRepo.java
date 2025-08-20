package com.nextplay.nextplay.repository.auth;

import com.nextplay.nextplay.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IUserRepo extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
