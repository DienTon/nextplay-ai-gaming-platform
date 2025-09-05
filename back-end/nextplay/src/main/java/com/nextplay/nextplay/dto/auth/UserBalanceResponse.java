package com.nextplay.nextplay.dto.auth;

public class UserBalanceResponse {
    private boolean success;
    private Integer balance;
    private String error;

    // Default constructor
    public UserBalanceResponse() {}

    // Constructor with parameters
    public UserBalanceResponse(boolean success, Integer balance, String error) {
        this.success = success;
        this.balance = balance;
        this.error = error;
    }

    // Getters and Setters
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public Integer getBalance() {
        return balance;
    }

    public void setBalance(Integer balance) {
        this.balance = balance;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
