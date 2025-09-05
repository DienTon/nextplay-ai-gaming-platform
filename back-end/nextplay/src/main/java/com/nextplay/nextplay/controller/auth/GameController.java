package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.dto.auth.*;
import com.nextplay.nextplay.model.auth.Game;
import com.nextplay.nextplay.model.auth.GameBet;
import com.nextplay.nextplay.model.auth.GameHistory;
import com.nextplay.nextplay.model.auth.GameStatus;
import com.nextplay.nextplay.repository.auth.IGameBetRepo;
import com.nextplay.nextplay.repository.auth.IGameHistoryRepo;
import com.nextplay.nextplay.repository.auth.IGameRepo;
import com.nextplay.nextplay.service.auth.GameHistoryService;
import com.nextplay.nextplay.service.auth.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "/*")
@RequestMapping("/api/page/game")
public class GameController {
    @Autowired
    GameHistoryService gameHistoryService;
    @Autowired
    IGameRepo gameRepo;
    @Autowired
    IGameBetRepo gameBetRepo;
    @Autowired
    GameService gameService;


    @PostMapping("/save-history")
    public ResponseEntity<?> saveGameHistory(@RequestBody GameHistoryRequest request) {
        try {
            GameHistoryResponse response = gameHistoryService.saveHistory(request);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new GameHistoryResponse(false, null, e.getMessage()));
        }
    }



    @GetMapping("/history")
    public ResponseEntity<?> getGameHistory(@RequestParam String email) {
        try {
            List<GameHistoryResponse> response = gameHistoryService.getHistoryByEmail(email);
            return ResponseEntity.ok(new GameHistoryListResponse(true, response, null));
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new GameHistoryListResponse(false, null, e.getMessage()));
        }
    }
    public static class GameHistoryListResponse {
        private boolean success;
        private List<GameHistoryResponse> data;
        private String error;

        public GameHistoryListResponse(boolean success, List<GameHistoryResponse> data, String error) {
            this.success = success;
            this.data = data;
            this.error = error;
        }

        // Getters and Setters
        public boolean isSuccess() { return success; }
        public void setSuccess(boolean success) { this.success = success; }

        public List<GameHistoryResponse> getData() { return data; }
        public void setData(List<GameHistoryResponse> data) { this.data = data; }

        public String getError() { return error; }
        public void setError(String error) { this.error = error; }
    }
    @PostMapping("/create-game")
    public ResponseEntity<Object> createGame(@RequestBody CreateGameRequest request) {
        Game game = new Game();
        game.setUserId(request.getUserId());
        game.setRound(request.getRound());
        game.setStatus(GameStatus.PLAYING);
        game.setCreatedAt(LocalDateTime.now());

        Game savedGame = gameRepo.save(game);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "gameId", savedGame.getId()
        ));
    }
    @PostMapping("/finish-game")
    public ResponseEntity<Object> finishGame(@RequestBody FinishGameRequest request) {
        Game game = gameRepo.findById(request.getGameId()).get();

        // Lưu kết quả xúc xắc
        game.setDice(request.getDice());
        game.setSum(request.getSum());
        game.setResult(request.getResult());

        // Tính toán thắng thua cho từng cược
        List<GameBet> bets = gameBetRepo.findByGame_Id(game.getId());
        Integer totalWinnings = 0;

        for (GameBet bet : bets) {
            boolean isWin = gameService.calculateBetResult(bet.getBetType(), request.getSum(), request.getResult());
            bet.setWin(isWin);

            if (isWin) {
                Integer winAmount = bet.getAmount() * gameService.getMultiplier(bet.getBetType());
                bet.setWinAmount(winAmount);
                totalWinnings += winAmount;
            }
        }

        game.setWinnings(totalWinnings);
        game.setProfit(totalWinnings - game.getTotalBet());
        game.setStatus(GameStatus.FINISHED);
        game.setFinishedAt(LocalDateTime.now());

        gameRepo.save(game);

        return ResponseEntity.ok(Map.of(
                "success", true,
                "profit", game.getProfit(),
                "winnings", totalWinnings
        ));
    }

}