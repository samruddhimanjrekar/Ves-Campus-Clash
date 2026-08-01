package com.ves.campusclash.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Max;

// ==========================================
// Campus Clash - Player Entity
// Represents the player information stored
// in the database.
// ==========================================

@Entity
public class Player {

	// Primary key with auto-generated ID
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	// Player registration details
	@NotBlank(message = "Full Name is required")
	private String fullName;

	@NotBlank(message = "Institute is required")
	private String institute;

	@NotBlank(message = "Course is required")
	private String course;

	@Min(value = 1, message = "Year must be at least 1")
	@Max(value = 5, message = "Year cannot be greater than 5")
	private Integer year;

	@NotBlank(message = "Instagram Handle is required")
	private String instagramHandle;

	// Player's game score
	private Integer score = 0;

	// Getters and Setters
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getInstitute() {
		return institute;
	}

	public void setInstitute(String institute) {
		this.institute = institute;
	}

	public String getCourse() {
		return course;
	}

	public void setCourse(String course) {
		this.course = course;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

	public String getInstagramHandle() {
		return instagramHandle;
	}

	public void setInstagramHandle(String instagramHandle) {
		this.instagramHandle = instagramHandle;
	}

	public Integer getScore() {
		return score;
	}

	public void setScore(Integer score) {
		this.score = score;
	}

	// Default constructor
	public Player() {
	}

	// Parameterized constructor
	public Player(Long id, String fullName, String institute, String course, Integer year, String instagramHandle,
			Integer score) {
		this.id = id;
		this.fullName = fullName;
		this.institute = institute;
		this.course = course;
		this.year = year;
		this.instagramHandle = instagramHandle;
		this.score = score;
	}

}
