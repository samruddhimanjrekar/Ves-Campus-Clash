// ==========================================
// Campus Clash - Registration Page
// Handles player registration, validation,
// and stores player details before the game.
// ==========================================

// Check whether the user has completed follow verification
const followed = localStorage.getItem("followed");

if (followed !== "true") {
  window.location.href = "index.html";
}

//alert("register.js is loaded");

// Get the registration form
const registrationForm = document.getElementById("registrationForm");

// Register player when the form is submitted
registrationForm.addEventListener("submit", async function (event) {
  // Prevent page refresh after form submission
  event.preventDefault();

  // Collect player details from the form
  const fullName = document.getElementById("fullName").value.trim();
  const institute = document.getElementById("institute").value.trim();
  const course = document.getElementById("course").value.trim();
  const year = parseInt(document.getElementById("year").value);
  const instagramHandle = document
    .getElementById("instagramHandle")
    .value.trim();

  // Perform client-side validation
  if (
    fullName.length < 3 ||
    institute.length === 0 ||
    course.length === 0 ||
    year < 1 ||
    year > 5 ||
    instagramHandle.length < 3
  ) {
    alert("Please enter valid details.");
    return;
  }

  // Create player object to send to the backend
  const player = {
    fullName: fullName,
    institute: institute,
    course: course,
    year: year,
    instagramHandle: instagramHandle,
    score: 0,
  };

  try {
    console.log(player);

    // Send registration request to the backend
    const response = await fetch("http://localhost:8080/players/register", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(player),
    });

    if (response.ok) {
      // Store registered player information locally
      const registeredPlayer = await response.json();

      localStorage.setItem("playerId", registeredPlayer.id);

      localStorage.setItem("playerName", registeredPlayer.fullName);

      localStorage.setItem("playerInstitute", registeredPlayer.institute);

      // Clear previous game session data
      localStorage.removeItem("gameCompleted");
      localStorage.removeItem("finalScore");

      alert("Registration Successful!");

      // Redirect player to the game page
      window.location.href = "game.html";
    } else {
      alert("Registration Failed!");
    }
  } catch (error) {
    console.log(error);

    alert("Cannot connect to server.");
  }
});
