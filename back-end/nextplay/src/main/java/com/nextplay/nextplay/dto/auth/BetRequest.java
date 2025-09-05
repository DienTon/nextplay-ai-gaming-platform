package com.nextplay.nextplay.dto.auth;

public class BetRequest {
    private String type;  // "tai", "xiu", etc.
    private Integer amount;
    // getters, setters

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
