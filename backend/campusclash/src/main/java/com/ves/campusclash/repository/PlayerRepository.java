package com.ves.campusclash.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ves.campusclash.entity.Player;

// ==========================================
// Campus Clash - Player Repository
// Provides database operations for the
// Player entity using Spring Data JPA.
// ==========================================

public interface PlayerRepository extends JpaRepository<Player, Long> {

}
