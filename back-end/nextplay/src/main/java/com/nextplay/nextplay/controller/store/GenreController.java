package com.nextplay.nextplay.controller.store;

import com.nextplay.nextplay.model.game_store.Genre;
import com.nextplay.nextplay.repository.store.IGenreRepo;
import com.nextplay.nextplay.service.store.genre.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/page/genres")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "/*")
public class GenreController {
    @Autowired
    IGenreService genreService;

    @GetMapping
    List<Genre> getAllGenre(){
        return genreService.getAllGenres();
    }
}
