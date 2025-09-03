package com.nextplay.nextplay.controller.store;

import com.nextplay.nextplay.dto.store.CartDTO;
import com.nextplay.nextplay.model.game_store.Cart;
import com.nextplay.nextplay.service.store.cart.ICartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<Void> addNewCart(@RequestBody CartDTO dto){
        cartService.addNewItem(dto);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

    @DeleteMapping("/")
    public ResponseEntity<Void> delete(@RequestParam Long id){
        cartService.deleteItemById(id);
        return ResponseEntity.status(HttpStatus.OK).build();
    }

}
