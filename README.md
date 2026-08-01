# 🎮 Campus Clash

Campus Clash is a full-stack web application developed as the MVP for a college gaming event across VES campuses.

Participants scan a QR code, follow the official Instagram page, register themselves, play a Whack-a-Mole game, and have their scores stored in a cloud database. At the end of the game, they can view and share their results.

---

# 🌐 Live Demo

### Frontend (Netlify)

https://vocal-pavlova-b7fcb3.netlify.app/

### Backend (Railway)

https://ves-campus-clash-production.up.railway.app

---

# 🚀 Tech Stack

## Frontend

- HTML5
- CSS3
- JavaScript (ES6)

## Backend

- Spring Boot
- Spring Data JPA
- REST API

## Database

- MySQL (Railway)

## Deployment

- Netlify (Frontend)
- Railway (Backend & Database)
- Docker

---

# 📂 Project Structure

```
Campus-Clash
│
├── frontend
│   ├── index.html
│   ├── register.html
│   ├── game.html
│   ├── result.html
│   ├── style.css
│   ├── register.js
│   ├── game.js
│   ├── result.js
│   └── assets/
│
├── backend
│   └── campusclash
│       ├── src
│       ├── pom.xml
│       ├── Dockerfile
│       └── application.properties
│
└── README.md
```

---

# ✨ Features

- QR Code based entry
- Instagram follow verification
- Player registration
- Input validation
- Whack-a-Mole game
- 30-second countdown timer
- Automatic score calculation
- Score storage in MySQL
- Result page
- Instagram story generation
- Responsive design
- Live cloud deployment

---

# ✅ Feature Checklist

| Module | Status | Description |
|---------|:------:|-------------|
| Landing Page | ✅ | Responsive landing page with project introduction |
| QR Code Entry | ✅ | QR code opens the live Netlify application |
| Instagram Follow Flow | ✅ | Users must follow the Instagram page before proceeding |
| Player Registration | ✅ | Collects participant details with validation |
| Client-side Validation | ✅ | Validates all required registration fields |
| Spring Boot REST API | ✅ | REST APIs for player registration and score management |
| MySQL Database | ✅ | Stores player information and scores |
| Whack-a-Mole Game | ✅ | Interactive 30-second game with real-time scoring |
| Countdown Timer | ✅ | Automatic game timer and game completion |
| Score Submission | ✅ | Saves player score to the backend database |
| Result Page | ✅ | Displays final score after game completion |
| Instagram Story Generation | ✅ | Generates a shareable result for social media |
| Responsive UI | ✅ | Optimized for desktop and mobile devices |
| Frontend Deployment | ✅ | Successfully deployed on Netlify |
| Backend Deployment | ✅ | Successfully deployed on Railway |
| Docker Support | ✅ | Dockerized Spring Boot backend |
| GitHub Repository | ✅ | Complete project source code with version control |

---

# ⚙️ Setup Instructions

## Clone Repository

```bash
git clone <repository-url>
```

---

## Frontend

Open the frontend folder and launch using Live Server or any static web server.

---

## Backend

Navigate to:

```
backend/campusclash
```

Run:

```bash
./mvnw spring-boot:run
```

or

```bash
mvn spring-boot:run
```

---

## Database

Update the database configuration inside:

```
application.properties
```

Example:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/campus_clash
spring.datasource.username=root
spring.datasource.password=yourpassword
```

For production, Railway MySQL is used.

---

# 🔗 API Endpoints

## Register Player

```
POST /players/register
```

## Update Score

```
PUT /players/{id}/score
```

---

# 🎯 Application Flow

```
Scan QR Code
      │
      ▼
Open Website
      │
      ▼
Follow Instagram
      │
      ▼
Register
      │
      ▼
Play Game
      │
      ▼
Save Score
      │
      ▼
View Result
      │
      ▼
Share Story
```

---

# 🏗️ Design Decisions

The project follows a client-server architecture.

- HTML, CSS, and JavaScript are used to build a lightweight frontend.
- Spring Boot exposes REST APIs.
- MySQL stores player information and scores.
- Railway hosts both the backend and database.
- Netlify hosts the frontend.

This architecture allows the frontend and backend to be deployed independently.

---

# ⚠️ Assumptions

- Users have an internet connection.
- JavaScript is enabled in the browser.
- Railway services are online.
- The application is intended for modern browsers.
- Each participant registers before playing.

---

# 🚧 Challenges Faced

- Deploying Spring Boot on Railway
- Configuring Docker for deployment
- Connecting Railway MySQL with Spring Boot
- Managing CORS between frontend and backend
- Making the UI responsive across devices
- Handling player session using Local Storage
- Deploying frontend and backend independently

---

# 🔮 Future Improvements

- Global leaderboard
- Admin dashboard
- User authentication
- Multiple game modes
- Event analytics
- QR code validation
- Email confirmation
- Social login
- Progressive Web App (PWA)
- Achievement badges
- Sound effects and animations

---

# 👨‍💻 Author

Developed as part of the Campus Clash MVP project.
