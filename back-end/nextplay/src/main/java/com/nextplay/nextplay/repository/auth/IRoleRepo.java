package com.nextplay.nextplay.repository.auth;

import com.nextplay.nextplay.model.auth.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IRoleRepo extends JpaRepository<Role,Long> {
    Optional<Role> findByName(String name);
}
