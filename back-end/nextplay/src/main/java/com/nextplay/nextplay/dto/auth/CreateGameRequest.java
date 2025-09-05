package com.nextplay.nextplay.dto.auth;

import java.util.List;

public class CreateGameRequest {
    private Long userId;
    private Integer round;
    // getters, setters

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
}

