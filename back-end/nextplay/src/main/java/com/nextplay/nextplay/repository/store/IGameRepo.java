package com.nextplay.nextplay.repository.store;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nextplay.nextplay.model.game_store.Game;


@Repository
public interface IGameRepo extends JpaRepository<Game, Long> {
    // Custom query methods can be added here if needed
    Page<Game> findBy(Pageable pageable);
}
