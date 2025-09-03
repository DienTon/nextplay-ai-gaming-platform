package com.nextplay.nextplay.service.store.cart;

import com.nextplay.nextplay.dto.store.CartDTO;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.model.game_store.Cart;
import com.nextplay.nextplay.model.game_store.Game;
import com.nextplay.nextplay.repository.auth.IUserRepo;
import com.nextplay.nextplay.repository.store.ICartRepo;
import com.nextplay.nextplay.repository.store.IGameRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService{
    @Autowired
    ICartRepo cartRepo;
    @Autowired
    IUserRepo userRepo;
    @Autowired
    IGameRepo gameRepo;
    @Override
    public List<Cart> getALLCart() {
        return cartRepo.findAll();
    }

    @Override
    public Cart addNewItem(CartDTO cartDto) {
        User user = userRepo.findById(cartDto.getIdUser()).get();
        Game game = gameRepo.findById(cartDto.getIdGame()).get();
        Cart cart = new Cart(user,game, cartDto.getQuantity());
        return cartRepo.save(cart);
    }

    @Override
    public void deleteItemById(Long id) {
        cartRepo.deleteById(id);
    }

}
