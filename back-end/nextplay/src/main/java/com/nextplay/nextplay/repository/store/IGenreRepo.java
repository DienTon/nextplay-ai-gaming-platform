package com.nextplay.nextplay.repository.store;

import com.nextplay.nextplay.model.game_store.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IGenreRepo extends JpaRepository<Genre,Long> {
}
