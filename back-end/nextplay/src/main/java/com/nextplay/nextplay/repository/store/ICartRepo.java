package com.nextplay.nextplay.repository.store;

import com.nextplay.nextplay.model.game_store.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ICartRepo extends JpaRepository<Cart,Long> {
    List<Cart> getAllByUserEmail(String email);
}
