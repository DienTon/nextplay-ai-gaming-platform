package com.nextplay.nextplay.service.store.genre;

import com.nextplay.nextplay.model.game_store.Genre;
import com.nextplay.nextplay.repository.store.IGenreRepo;
import com.nextplay.nextplay.service.store.genre.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenreService implements IGenreService {
    @Autowired
    IGenreRepo genreRepo;
    @Override
    public List<Genre> getAllGenres() {
        return genreRepo.findAll();
    }

    @Override
    public Genre getGenreById(Long id) {
        return null;
    }

    @Override
    public Genre createGenre(Genre genre) {
        return null;
    }

    @Override
    public Genre updateGenre(Long id, Genre genre) {
        return null;
    }

    @Override
    public void deleteGenre(Long id) {

    }
}
