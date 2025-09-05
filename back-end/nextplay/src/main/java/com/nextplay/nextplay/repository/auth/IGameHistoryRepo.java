package com.nextplay.nextplay.repository.auth;

import com.nextplay.nextplay.model.auth.GameHistory;
import com.nextplay.nextplay.model.auth.Role;
import com.nextplay.nextplay.model.auth.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IGameHistoryRepo extends JpaRepository<GameHistory,Long> {
    List<GameHistory> findByUserOrderByTimestampDesc (User user);
}
