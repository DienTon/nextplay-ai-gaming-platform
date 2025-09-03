package com.nextplay.nextplay.service.store.game;

import com.nextplay.nextplay.dto.store.GameDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nextplay.nextplay.model.game_store.Game;

@Service
public interface IGameService {
    Page<Game> findBy(Pageable pageable);
    Game addNewGame(GameDto dto);
    void deleteGame(Long id);
    Game updateGame(GameDto dto);
}
