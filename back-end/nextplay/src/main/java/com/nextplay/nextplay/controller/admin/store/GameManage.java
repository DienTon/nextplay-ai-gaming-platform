package com.nextplay.nextplay.controller.admin.store;

import com.nextplay.nextplay.dto.store.GameDto;
import com.nextplay.nextplay.service.store.game.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/games")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "/*")
public class GameManage {
    @Autowired
    private GameService gameService;
    @PostMapping()
    public ResponseEntity<Void> addNewGame(@RequestBody GameDto dto){
        gameService.addNewGame(dto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
