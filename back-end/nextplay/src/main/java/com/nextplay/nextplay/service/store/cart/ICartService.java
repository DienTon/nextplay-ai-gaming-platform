package com.nextplay.nextplay.service.store.cart;

import com.nextplay.nextplay.dto.store.CartDTO;
import com.nextplay.nextplay.model.game_store.Cart;

import java.util.List;

public interface ICartService {
    List<Cart> getALLCart();
    Cart addNewItem(CartDTO cart);
    void deleteItemById(Long id);
}
