package com.nextplay.nextplay.repository.auth;

import com.nextplay.nextplay.model.auth.Game;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGameRepo extends JpaRepository<Game,Long> {
}
