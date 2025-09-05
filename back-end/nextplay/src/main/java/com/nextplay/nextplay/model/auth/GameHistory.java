package com.nextplay.nextplay.model.auth;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name = "game_histories")
public class GameHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(name = "round_number")
    private Integer round;

    // Lưu dice values dưới dạng JSON string hoặc comma-separated
    @Column(name = "dice_values", columnDefinition = "TEXT")
    private String diceValues;

    @Column(name = "total_sum")
    private Integer sum;

    @Column(name = "game_result")
    private String result; // "tài", "xỉu", etc.

    @Column(name = "bet_amount")
    private Integer bet;

    @Column(name = "winnings")
    private Integer winnings;

    @Column(name = "profit")
    private Integer profit;

    @Column(name = "created_at")
    private LocalDateTime timestamp;


    // Default constructor
    public GameHistory() {
        this.timestamp = LocalDateTime.now();
    }

    public GameHistory(Integer round, List<Integer> dice, Integer sum, String result, Integer bet, Integer winnings, Integer profit) {
    }

    // Helper methods for dice handling
    @JsonProperty("dice")
    @Transient
    public List<Integer> getDice() {
        if (diceValues == null || diceValues.isEmpty()) {
            return List.of();
        }

        String[] values = diceValues.split(",");
        return List.of(
                Integer.parseInt(values[0].trim()),
                Integer.parseInt(values[1].trim()),
                Integer.parseInt(values[2].trim())
        );
    }

    public void setDice(List<Integer> dice) {
        if (dice != null && dice.size() >= 3) {
            this.diceValues = dice.get(0) + "," + dice.get(1) + "," + dice.get(2);
        }
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Integer getRound() {
        return round;
    }

    public void setRound(Integer round) {
        this.round = round;
    }

    public String getDiceValues() {
        return diceValues;
    }

    public void setDiceValues(String diceValues) {
        this.diceValues = diceValues;
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

    public LocalDateTime getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(LocalDateTime timestamp) {
        this.timestamp = timestamp;
    }
}
