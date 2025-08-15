package com.nextplay.nextplay.service.store.game;

import com.nextplay.nextplay.dto.GameDto;
import com.nextplay.nextplay.model.game_store.GameGenre;
import com.nextplay.nextplay.model.game_store.Genre;
import com.nextplay.nextplay.repository.store.IGameGenreRepo;
import com.nextplay.nextplay.repository.store.IGenreRepo;
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
    @Autowired
    private IGenreRepo genreRepo;
    @Autowired
    private IGameGenreRepo gameGenreRepo;


    @Override
    public Page<Game> findBy(Pageable pageable) {
        return gameRepo.findBy(pageable);
    }

    @Override
    public Game addNewGame(GameDto dto) {
        Game game = new Game(dto.getTitle(),dto.getDescription(),dto.getPrice(),dto.getReleaseDate(), dto.getImageUrl());
        gameRepo.save(game);
        for (Long genreId : dto.getLongList()) {
            Genre genre = genreRepo.findById(genreId)
                    .orElseThrow(() -> new RuntimeException("Genre not found: " + genreId));
            gameGenreRepo.save(new GameGenre(game, genre));
        }
        return game;
    }

    @Override
    public void deleteGame(Long id) {
        gameRepo.deleteById(id);
    }

    @Override
    public Game updateGame(GameDto dto) {
        Game game = new Game(dto.getTitle(),dto.getDescription(),dto.getPrice(),dto.getReleaseDate(), dto.getImageUrl());

        return null;
    }


}
