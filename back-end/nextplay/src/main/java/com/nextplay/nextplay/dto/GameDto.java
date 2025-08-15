package com.nextplay.nextplay.dto;

import com.nextplay.nextplay.model.game_store.Game;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

public class GameDto {
    private long id;
    private String title;
    private double price;
    private List<Long> longList;
    private String imageUrl;
    private LocalDate releaseDate;
    private String description;


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

    public List<Long> getLongList() {
        return longList;
    }

    public void setLongList(List<Long> longList) {
        this.longList = longList;
    }
}
