package com.nextplay.nextplay.controller.forum;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.nextplay.nextplay.service.store.game.IGameService;


@RestController
@RequestMapping("/api/page")
@CrossOrigin(origins = "http://localhost:4200/", allowedHeaders = "*")
public class GameController {
    @Autowired
    private IGameService gameService;

     
}
