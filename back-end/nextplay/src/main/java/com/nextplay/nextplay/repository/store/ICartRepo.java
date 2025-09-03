package com.nextplay.nextplay.repository.store;

import com.nextplay.nextplay.model.game_store.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICartRepo extends JpaRepository<Cart,Long> {
}
