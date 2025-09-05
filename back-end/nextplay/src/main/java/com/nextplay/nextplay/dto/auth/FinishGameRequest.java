package com.nextplay.nextplay.dto.auth;

import java.util.List;

public class FinishGameRequest {
    private Long gameId;
    private List<Integer> dice;
    private Integer sum;
    private String result;
    // getters, setters

    public Long getGameId() {
        return gameId;
    }

    public void setGameId(Long gameId) {
        this.gameId = gameId;
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
}
