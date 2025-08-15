package com.nextplay.nextplay.model.game_store;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column()
    private String name;

    @OneToMany(mappedBy = "genre")
    @JsonIgnore
    private Set<GameGenre> gameGenres = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<GameGenre> getGameGenres() {
        return gameGenres;
    }

    public void setGameGenres(Set<GameGenre> gameGenres) {
        this.gameGenres = gameGenres;
    }
}
