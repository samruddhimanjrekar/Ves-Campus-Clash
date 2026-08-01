package com.ves.campusclash.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ves.campusclash.entity.Player;
import com.ves.campusclash.repository.PlayerRepository;

// ==========================================
// Campus Clash - Player Service
// Handles business logic for player
// registration and score management.
// ==========================================

@Service
public class PlayerService {

  // Inject the player repository
  @Autowired
  private PlayerRepository playerRepository;

  // Register a new player in the database
  public Player registerPlayer(Player player) {
    return playerRepository.save(player);
  }

  // Update the player's final score
  public Player updateScore(Long playerId, Integer score) {

    Player player = playerRepository.findById(playerId).orElse(null);

    if (player != null) {

      player.setScore(score);

      return playerRepository.save(player);
    }

    return null;
  }
}
