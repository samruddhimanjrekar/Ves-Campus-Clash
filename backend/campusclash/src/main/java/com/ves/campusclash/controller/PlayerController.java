package com.ves.campusclash.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import com.ves.campusclash.dto.ScoreRequest;

import com.ves.campusclash.entity.Player;
import com.ves.campusclash.service.PlayerService;

// ==========================================
// Campus Clash - Player Controller
// Exposes REST APIs for player registration
// and score management.
// ==========================================

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/players")
public class PlayerController {

  // Inject the player service
  @Autowired
  private PlayerService playerService;

  // Register a new player
  @PostMapping("/register")
  public Player registerPlayer(@Valid @RequestBody Player player) {
    return playerService.registerPlayer(player);
  }

  // Update the player's final game score
  @PutMapping("/{id}/score")
  public Player updateScore(@PathVariable Long id,
      @RequestBody ScoreRequest scoreRequest) {

    return playerService.updateScore(id, scoreRequest.getScore());

  }

}
