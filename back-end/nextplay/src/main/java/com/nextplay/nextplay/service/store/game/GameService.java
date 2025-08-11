package com.nextplay.nextplay.service.store.game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.nextplay.nextplay.model.game_store.Game;
import com.nextplay.nextplay.repository.store.IGameRepo;

@Service
public class GameService implements IGameService {
    @Autowired
    private IGameRepo gameRepo;

    @Override
    public Page<Game> findBy(Pageable pageable) {
        return gameRepo.findBy(pageable);
    }

}
