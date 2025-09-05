package com.nextplay.nextplay.dto.auth;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.nextplay.nextplay.model.auth.GameHistory;

import java.util.List;

public class GameHistoryDto {

    @JsonProperty("dice")
    private List<Integer> dice;  // Sẽ serialize thành [3, 4, 6]

    // Constructor from entity
    public static GameHistoryDto fromEntity(GameHistory entity) {
        GameHistoryDto dto = new GameHistoryDto();
        dto.dice = entity.getDice();
        return dto;
    }
}