// ==========================================
// Campus Clash - Game Page
// Handles Whack-A-Mole gameplay, score
// tracking, timer management and score saving.
// ==========================================

// Get the game board and start the game session
const gameBoard = document.getElementById("gameBoard");
localStorage.setItem("gameActive", "true");

// Game variables
let holes = [];

let score = 0;

const scoreDisplay = document.getElementById("score");

let timeLeft = 30;

const timerDisplay = document.getElementById("timer");
// Verify that the player reached the game
// through the correct application flow
const followed = localStorage.getItem("followed");
const playerId = localStorage.getItem("playerId");
const gameCompleted = localStorage.getItem("gameCompleted");

console.log("followed =", localStorage.getItem("followed"));
console.log("playerId =", localStorage.getItem("playerId"));
console.log("gameCompleted =", localStorage.getItem("gameCompleted"));
if (followed !== "true" || playerId === null || gameCompleted === "true") {
  window.location.href = "index.html";
}

// Clear player session if the page is refreshed
// during an active game
window.addEventListener("beforeunload", function () {
  if (localStorage.getItem("gameActive") === "true") {
    localStorage.removeItem("playerId");
    localStorage.removeItem("finalScore");
  }
});

// Dynamically create the 3×3 game board
for (let i = 0; i < 9; i++) {
  const hole = document.createElement("div");

  hole.classList.add("hole");

  gameBoard.appendChild(hole);

  holes.push(hole);

  hole.addEventListener("click", function () {
    // Increase score when the mole is hit
    if (hole.innerHTML === "🐹") {
      score += 10;

      scoreDisplay.innerHTML = "Score: " + score;

      hole.innerHTML = "";
    }
  });
}

// Randomly move the mole to a new position
function moveMole() {
  holes.forEach(function (hole) {
    hole.innerHTML = "";
  });

  const randomIndex = Math.floor(Math.random() * 9);

  holes[randomIndex].innerHTML = "🐹";
}

// Save the player's final score to the backend
async function saveScore() {
  try {
    const response = await fetch(
      `https://ves-campus-clash-production.up.railway.app/players/${playerId}/score`,
      {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          score: score,
        }),
      },
    );

    if (response.ok) {
      // Store game data and redirect to the result page
      alert("Score Saved Successfully!");

      localStorage.setItem("finalScore", score);
      localStorage.setItem("gameCompleted", "true");

      localStorage.removeItem("gameActive");

      window.location.href = "result.html";
    } else {
      alert("Failed to save score.");
    }
  } catch (error) {
    console.log(error);

    alert("Cannot connect to server.");
  }
}

// Start the game
moveMole();

// Move the mole every second
const moleInterval = setInterval(moveMole, 1000);

// Run the countdown timer
const timerInterval = setInterval(function () {
  timeLeft--;

  timerDisplay.innerHTML = "Time: " + timeLeft;

  if (timeLeft === 0) {
    clearInterval(timerInterval);

    clearInterval(moleInterval);

    saveScore();
  }
}, 1000);
