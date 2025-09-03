package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.model.game_store.Cart;
import com.nextplay.nextplay.service.auth.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/page/user")
@CrossOrigin(origins = "http://localhost:3000/", allowedHeaders = "/*")
public class UserController {
    @Autowired
    IUserService userService;

    @GetMapping("/getByEmail")
    public ResponseEntity<User> getUserByEmail(@RequestParam String email) {
        User user = userService.findByMail(email).get();
        return ResponseEntity.ok(user);
    }

}
