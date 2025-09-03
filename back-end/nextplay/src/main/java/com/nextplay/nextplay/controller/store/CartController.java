package com.nextplay.nextplay.controller.store;

import com.nextplay.nextplay.dto.store.CartDto;
import com.nextplay.nextplay.dto.store.GameDto;
import com.nextplay.nextplay.model.game_store.Cart;
import com.nextplay.nextplay.model.game_store.Game;
import com.nextplay.nextplay.service.store.cart.CartService;
import com.nextplay.nextplay.service.store.cart.ICartService;
import com.nextplay.nextplay.service.store.game.IGameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/page/cart")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "/*")
public class CartController {
    @Autowired
    ICartService cartService;

    @GetMapping("/")
    public ResponseEntity<List<Cart>> getListCart() {
        List<Cart> carts = cartService.getALLCart();
        return ResponseEntity.ok(carts);
    }

    @PostMapping("/")
    public ResponseEntity<Void> addNewCart(@RequestBody CartDto dto){
        cartService.addNewItem(dto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
