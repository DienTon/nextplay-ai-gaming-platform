package com.nextplay.nextplay.dto.auth;

public class UpdateBalanceRequest {
    private String email;

    private Integer amount;

    // Default constructor
    public UpdateBalanceRequest() {}

    // Constructor with parameters
    public UpdateBalanceRequest(String email, Integer amount) {
        this.email = email;
        this.amount = amount;
    }

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getAmount() {
        return amount;
    }

    public void setAmount(Integer amount) {
        this.amount = amount;
    }
}
