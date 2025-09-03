package com.nextplay.nextplay.service.store.game;

import com.nextplay.nextplay.dto.store.GameDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nextplay.nextplay.model.game_store.Game;

@Service
public interface IGameService {
    Page<Game> findBy(Pageable pageable);
    Game addNewGame(GameDTO dto);
    void deleteGame(Long id);
    Game updateGame(GameDTO dto);
}
