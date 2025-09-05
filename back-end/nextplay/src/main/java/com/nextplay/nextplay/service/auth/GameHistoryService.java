package com.nextplay.nextplay.service.auth;

import com.nextplay.nextplay.dto.auth.GameHistoryRequest;
import com.nextplay.nextplay.dto.auth.GameHistoryResponse;
import com.nextplay.nextplay.model.auth.GameHistory;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.repository.auth.IGameHistoryRepo;
import com.nextplay.nextplay.repository.auth.IUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class GameHistoryService {
    @Autowired
    IUserRepo userRepository;
    @Autowired
    IGameHistoryRepo gameHistoryRepository;
    public List<GameHistoryResponse> getHistoryByEmail(String email) {
        try {
            // Tìm user theo email trước
            User user = userRepository.findByEmail(email).get();
            if (user == null) {
                throw new RuntimeException("User not found with email: " + email);
            }

            // Lấy lịch sử thông qua relationship User -> GameHistory
            List<GameHistory> histories = gameHistoryRepository.findByUserOrderByTimestampDesc(user);

            // Convert entities thành response DTOs
            return histories.stream().map(history -> {
                GameHistoryResponse.GameHistoryData data = new GameHistoryResponse.GameHistoryData();
                data.setId(history.getId());
                data.setRound(history.getRound());
                data.setDice(history.getDice());  // Sẽ convert từ string thành List<Integer>
                data.setSum(history.getSum());
                data.setResult(history.getResult());
                data.setBet(history.getBet());
                data.setWinnings(history.getWinnings());
                data.setProfit(history.getProfit());
                data.setTimestamp(history.getTimestamp());
                data.setEmail(email);

                return new GameHistoryResponse(true, data, null);
            }).collect(Collectors.toList());

        } catch (Exception e) {
            throw new RuntimeException("Error getting history: " + e.getMessage());
        }
    }
    public GameHistoryResponse saveHistory(GameHistoryRequest request) {
        try {
            // Tìm user theo email - QUAN TRỌNG: phải có user trước khi lưu history
            User user = userRepository.findByEmail(request.getEmail()).get();
            if (user == null) {
                return new GameHistoryResponse(false, null, "User not found with email: " + request.getEmail());
            }

            // Tạo GameHistory entity và liên kết với User
            GameHistory gameHistory = new GameHistory();
            gameHistory.setUser(user);  // ← QUAN HỆ GIỮA USER VÀ HISTORY
            gameHistory.setRound(request.getRound());
            gameHistory.setDice(request.getDice());  // Sẽ convert thành string trong model
            gameHistory.setSum(request.getSum());
            gameHistory.setResult(request.getResult());
            gameHistory.setBet(request.getBet());
            gameHistory.setWinnings(request.getWinnings());
            gameHistory.setProfit(request.getProfit());
            gameHistory.setTimestamp(LocalDateTime.now());

            // Lưu vào database
            GameHistory savedHistory = gameHistoryRepository.save(gameHistory);

            // Convert to response format
            GameHistoryResponse.GameHistoryData data = new GameHistoryResponse.GameHistoryData();
            data.setId(savedHistory.getId());
            data.setRound(savedHistory.getRound());
            data.setDice(savedHistory.getDice());  // Sẽ convert từ string thành List<Integer>
            data.setSum(savedHistory.getSum());
            data.setResult(savedHistory.getResult());
            data.setBet(savedHistory.getBet());
            data.setWinnings(savedHistory.getWinnings());
            data.setProfit(savedHistory.getProfit());
            data.setTimestamp(savedHistory.getTimestamp());
            data.setEmail(request.getEmail());

            return new GameHistoryResponse(true, data, null);
        } catch (Exception e) {
            return new GameHistoryResponse(false, null, "Error saving history: " + e.getMessage());
        }
    }
}
