package com.nextplay.nextplay.dto.auth;

public class UserBalanceRequest {
    private String email;

    // Default constructor
    public UserBalanceRequest() {}

    // Constructor with parameters
    public UserBalanceRequest(String email) {
        this.email = email;
    }

    // Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
