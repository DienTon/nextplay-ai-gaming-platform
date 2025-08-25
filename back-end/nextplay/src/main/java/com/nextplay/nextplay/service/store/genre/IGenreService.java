package com.nextplay.nextplay.service.store.genre;

import java.util.List;

import com.nextplay.nextplay.model.game_store.Genre;

public interface IGenreService {
    List<Genre> getAllGenres();
    Genre getGenreById(Long id);
    Genre createGenre(Genre genre);
    Genre updateGenre(Long id, Genre genre);
    void deleteGenre(Long id);
}
