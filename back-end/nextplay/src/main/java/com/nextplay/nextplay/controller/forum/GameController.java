package com.nextplay.nextplay.controller.forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nextplay.nextplay.model.game_store.Game;
import com.nextplay.nextplay.service.store.game.GameService;


@RestController
@RequestMapping("/api/page")
@CrossOrigin(origins = "http://localhost:3001/", allowedHeaders = "*")
public class GameController {
    @Autowired
    private GameService gameService;

    @GetMapping("/games/list")
     public ResponseEntity<Page<Game>> getListGames(
            @RequestParam(name = "page",defaultValue = "0") int page,
            @RequestParam(name = "size",defaultValue = "5") int size,
            @RequestParam(name = "sort",defaultValue = "createdAt,desc") String[] sort
    ) {
        Sort.Direction direction = Sort.Direction.fromString(sort[1]);
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sort[0]));

        Page<Game> games = gameService.findBy(pageable);
        return ResponseEntity.ok(games);
    }
}
