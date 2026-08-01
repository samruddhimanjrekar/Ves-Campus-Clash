# 🏆 Campus Clash

Campus Clash is a full-stack web application developed for the VES Campus Clash Assignment. It allows users to register, play a Whack-A-Mole game, save their scores in a MySQL database, and download an Instagram-ready Story Card.

---

# Setup

## Prerequisites

- Java 17+
- Spring Boot
- MySQL
- Maven
- Visual Studio Code (Frontend)
- Spring Tool Suite / IntelliJ IDEA (Backend)
- Live Server Extension

## Backend Setup

1. Open the backend project.
2. Configure MySQL credentials in `application.properties`.
3. Run the Spring Boot application.

Backend runs on:

```
http://localhost:8080
```

## Frontend Setup

1. Open the frontend folder in VS Code.
2. Start Live Server.

Frontend runs on:

```
http://127.0.0.1:5500
```

---

# Stack + Rationale

## Frontend

- HTML5 – Structure of the application
- CSS3 – Responsive styling and UI
- JavaScript – Game logic, API calls and route protection

## Backend

- Spring Boot – REST API development
- Spring Data JPA – Database interaction
- Hibernate – ORM implementation

## Database

- MySQL – Persistent storage of player details and scores

### Rationale

Spring Boot with MySQL was chosen because it provides a robust backend for REST APIs and persistent data storage. HTML, CSS and JavaScript were used to keep the frontend lightweight while implementing all assignment requirements without additional frameworks.

---

# Folder Structure

```
CampusClash/
│
├── frontend/
│   ├── index.html
│   ├── register.html
│   ├── game.html
│   ├── result.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── index.js
│       ├── register.js
│       ├── game.js
│       └── result.js
│
├── backend/
│   ├── controller/
│   ├── dto/
│   ├── entity/
│   ├── repository/
│   ├── service/
│   └── CampusClashApplication.java
│
└── README.md
```

---

# Assumptions

- Each player completes only one game session.
- Internet connectivity is available during registration and score submission.
- The backend server is running before starting the frontend.
- MySQL is configured correctly.
- Players follow the required flow: Landing → Registration → Game → Result.

---

# Challenges

- Implementing complete route protection so pages cannot be accessed directly.
- Preventing replay after the result page while allowing a newly registered player to play.
- Maintaining game progress during page refresh.
- Integrating frontend with backend using REST APIs.
- Generating a high-quality Story Card using html2canvas.
- Ensuring responsive design across desktop and mobile devices.

---

# Future Work

- Online leaderboard
- Authentication and login system
- Multiplayer gameplay
- Social media sharing API integration
- Sound effects and animations
- Difficulty levels
- Admin dashboard for player statistics