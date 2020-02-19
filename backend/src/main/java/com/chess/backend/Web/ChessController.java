package com.chess.backend.Web;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ChessController {

    @GetMapping("valid")
    public Boolean isValidMove(@RequestParam("fromX") int fromX,
                               @RequestParam("fromY") int fromY,
                               @RequestParam("toX") int toX,
                               @RequestParam("toY") int toY) {

        int dx = toX - fromX;
        int dy = toY - fromY;

        return (Math.abs(dx) == 2 && Math.abs(dy) == 1) ||
                (Math.abs(dx) == 1 && Math.abs(dy) == 2);
    }

}
