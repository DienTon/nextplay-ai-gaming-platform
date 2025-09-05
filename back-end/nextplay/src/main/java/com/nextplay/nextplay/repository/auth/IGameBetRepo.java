package com.nextplay.nextplay.repository.auth;

import com.nextplay.nextplay.model.auth.GameBet;
import com.nextplay.nextplay.model.auth.GameHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IGameBetRepo extends JpaRepository<GameBet,Long> {
    List<GameBet> findByGame_Id(Long id);
}
