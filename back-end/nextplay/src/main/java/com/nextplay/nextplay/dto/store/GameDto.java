package com.nextplay.nextplay.dto.store;

import com.nextplay.nextplay.model.game_store.Game;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class GameDto {
    private long id;
    private String title;
    private double price;
    private List<Long> genre;
    private String imageUrl;
    private LocalDate releaseDate;
    private String description;
    public GameDto() {
        this.genre = new ArrayList<>(); // Khởi tạo empty list
    }


    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public LocalDate getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(LocalDate releaseDate) {
        this.releaseDate = releaseDate;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public List<Long> getGenre() {
        return genre;
    }

    public void setGenre(List<Long> genre) {
        this.genre = genre;
    }
}
