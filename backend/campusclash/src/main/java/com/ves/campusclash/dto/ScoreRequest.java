package com.ves.campusclash.dto;

// ==========================================
// Campus Clash - Score Request DTO
// Transfers the player's final score from
// the frontend to the backend.
// ==========================================

public class ScoreRequest {

    // Player's final game score
    private Integer score;

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

}