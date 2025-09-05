package com.nextplay.nextplay.dto.auth;

import java.util.List;

public class GameHistoryRequest {
    private Integer round;
    private List<Integer> dice;  // Frontend gửi [3, 4, 6]
    private Integer sum;
    private String result;
    private Integer bet;
    private Integer winnings;
    private Integer profit;
    private String email;

    // Getters and setters

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Integer> getDice() {
        return dice;
    }

    public void setDice(List<Integer> dice) {
        this.dice = dice;
    }

    public Integer getRound() {
        return round;
    }

    public void setRound(Integer round) {
        this.round = round;
    }

    public Integer getSum() {
        return sum;
    }

    public void setSum(Integer sum) {
        this.sum = sum;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Integer getBet() {
        return bet;
    }

    public void setBet(Integer bet) {
        this.bet = bet;
    }

    public Integer getWinnings() {
        return winnings;
    }

    public void setWinnings(Integer winnings) {
        this.winnings = winnings;
    }

    public Integer getProfit() {
        return profit;
    }

    public void setProfit(Integer profit) {
        this.profit = profit;
    }
}