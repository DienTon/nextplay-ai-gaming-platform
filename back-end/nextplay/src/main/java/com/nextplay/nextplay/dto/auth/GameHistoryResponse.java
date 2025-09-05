package com.nextplay.nextplay.dto.auth;

import java.time.LocalDateTime;
import java.util.List;

public class GameHistoryResponse {
    private boolean success;
    private GameHistoryData data;
    private String error;

    // Default constructor
    public GameHistoryResponse() {}

    // Constructor with parameters
    public GameHistoryResponse(boolean success, GameHistoryData data, String error) {
        this.success = success;
        this.data = data;
        this.error = error;
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public GameHistoryData getData() {
        return data;
    }

    public void setData(GameHistoryData data) {
        this.data = data;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    // Inner class cho data structure
    public static class GameHistoryData {
        private Long id;
        private Integer round;
        private List<Integer> dice;
        private Integer sum;
        private String result;
        private Integer bet;
        private Integer winnings;
        private Integer profit;
        private LocalDateTime timestamp;
        private String email;

        // Default constructor
        public GameHistoryData() {}

        // Getters and Setters
        public Long getId() { return id; }
        public void setId(Long id) { this.id = id; }

        public Integer getRound() { return round; }
        public void setRound(Integer round) { this.round = round; }

        public List<Integer> getDice() { return dice; }
        public void setDice(List<Integer> dice) { this.dice = dice; }

        public Integer getSum() { return sum; }
        public void setSum(Integer sum) { this.sum = sum; }

        public String getResult() { return result; }
        public void setResult(String result) { this.result = result; }

        public Integer getBet() { return bet; }
        public void setBet(Integer bet) { this.bet = bet; }

        public Integer getWinnings() { return winnings; }
        public void setWinnings(Integer winnings) { this.winnings = winnings; }

        public Integer getProfit() { return profit; }
        public void setProfit(Integer profit) { this.profit = profit; }

        public LocalDateTime getTimestamp() { return timestamp; }
        public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }
    }
}
