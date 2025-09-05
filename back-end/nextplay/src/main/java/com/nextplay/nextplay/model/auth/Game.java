package com.nextplay.nextplay.model.auth;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "games")
public class Game {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    private Integer round;

    @ElementCollection
    @CollectionTable(name = "game_dice", joinColumns = @JoinColumn(name = "game_id"))
    @Column(name = "dice_value")
    private List<Integer> dice;  // [3, 4, 6]

    private Integer sum;         // 13
    private String result;       // "tai" hoặc "xiu"
    private Integer totalBet;    // Tổng tiền đặt cược
    private Integer winnings;    // Tiền thắng
    private Integer profit;      // Lãi/lỗ

    @Enumerated(EnumType.STRING)
    private GameStatus status;   // PLAYING, FINISHED

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    @Column(name = "finished_at")
    private LocalDateTime finishedAt;

    // Constructors, getters, setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Integer getRound() {
        return round;
    }

    public void setRound(Integer round) {
        this.round = round;
    }

    public List<Integer> getDice() {
        return dice;
    }

    public void setDice(List<Integer> dice) {
        this.dice = dice;
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

    public Integer getTotalBet() {
        return totalBet;
    }

    public void setTotalBet(Integer totalBet) {
        this.totalBet = totalBet;
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

    public GameStatus getStatus() {
        return status;
    }

    public void setStatus(GameStatus status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getFinishedAt() {
        return finishedAt;
    }

    public void setFinishedAt(LocalDateTime finishedAt) {
        this.finishedAt = finishedAt;
    }
}

