package com.nextplay.nextplay.model.auth;

import jakarta.persistence.*;

@Entity
@Table(name = "game_bets")
public class GameBet {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "game_id")
    private Game game;

    private String betType;      // "tai", "xiu", "big", "small", "even", "odd"
    private Integer amount;      // Số tiền cược
    private Boolean isWin;       // Thắng hay thua
    private Integer winAmount;   // Tiền thắng (nếu có)

    // Constructors, getters, setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public String getBetType() {
        return betType;
    }

    public void setBetType(String betType) {
        this.betType = betType;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }

    public Boolean getWin() {
        return isWin;
    }

    public void setWin(Boolean win) {
        isWin = win;
    }

    public Integer getWinAmount() {
        return winAmount;
    }

    public void setWinAmount(Integer winAmount) {
        this.winAmount = winAmount;
    }
}
