package com.nextplay.nextplay.service.auth;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GameService {

    /**
     * Tính toán kết quả cược
     * @param betType Loại cược: "tai", "xiu", "big", "small", "even", "odd"
     * @param sum Tổng điểm xúc xắc
     * @param result Kết quả chung: "tai" hoặc "xiu"
     * @return true nếu thắng, false nếu thua
     */
    public boolean calculateBetResult(String betType, Integer sum, String result) {
        switch (betType.toLowerCase()) {
            case "tai":
                return sum >= 11 && sum <= 17;

            case "xiu":
                return sum >= 4 && sum <= 10;

            case "big":
                return sum > 10;  // Lớn hơn 10

            case "small":
                return sum <= 10; // Nhỏ hơn hoặc bằng 10

            case "even":
                return sum % 2 == 0; // Chẵn

            case "odd":
                return sum % 2 == 1; // Lẻ

            default:
                return false;
        }
    }

    /**
     * Lấy hệ số nhân cho từng loại cược
     */
    public Integer getMultiplier(String betType) {
        switch (betType.toLowerCase()) {
            case "tai":
            case "xiu":
                return 2;  // 1:2

            case "even":
            case "odd":
                return 2;  // 1:2

            case "big":
            case "small":
                return 2;  // 1:1.5 -> tạm thời 2 cho đơn giản

            default:
                return 1;
        }
    }
}
