package com.nextplay.nextplay.controller.auth;

import com.nextplay.nextplay.dto.auth.GameHistoryDto;
import com.nextplay.nextplay.dto.auth.UpdateBalanceRequest;
import com.nextplay.nextplay.dto.auth.UserBalanceResponse;
import com.nextplay.nextplay.model.auth.User;
import com.nextplay.nextplay.service.auth.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

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

//    @GetMapping("/balance")
//    public ResponseEntity<Double> getBalance(@RequestParam String email){
//        Double balance = userService.getUserBalance(email);
//        return ResponseEntity.ok(balance);
//    }
    @PostMapping("/add-money")
    public ResponseEntity<?> addMoney(@RequestBody UpdateBalanceRequest request) {
        try {
            UserBalanceResponse response = userService.addMoney(request.getEmail(), request.getAmount());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new UserBalanceResponse(false, 0, e.getMessage()));
        }
    }

    /**
     * API trừ tiền khi user thua
     */
    @PostMapping("/subtract-money")
    public ResponseEntity<?> subtractMoney(@RequestBody UpdateBalanceRequest request) {
        try {
            UserBalanceResponse response = userService.subtractMoney(request.getEmail(), request.getAmount());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new UserBalanceResponse(false, 0, e.getMessage()));
        }
    }

    /**
     * API lấy số dư hiện tại của user
     */
    @GetMapping("/balance")
    public ResponseEntity<?> getUserBalance(@RequestParam String email) {
        try {
            Integer response = userService.getUserBalance(email);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.badRequest()
                    .body(new UserBalanceResponse(false, 0, e.getMessage()));
        }
    }

}
