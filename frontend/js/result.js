// ==========================================
// Campus Clash - Result Page
// Displays the player's final score and
// generates an Instagram-ready Story Card.
// ==========================================

// Get the required page elements
const finalScore = document.getElementById("finalScore");
const storyScore = document.getElementById("storyScore");
const storyPlayer = document.getElementById("storyPlayer");
const storyInstitute = document.getElementById("storyInstitute");
const downloadBtn = document.getElementById("downloadBtn");

// Verify that the player reached the result
// page through the correct application flow
const followed = localStorage.getItem("followed");
const playerId = localStorage.getItem("playerId");
const score = localStorage.getItem("finalScore");

if (followed !== "true" || playerId === null || score === null) {
  window.location.href = "index.html";
} else {
  // Display the player's final score and details
  finalScore.innerHTML = "Final Score: " + score;

  storyScore.innerHTML = score;

  storyPlayer.innerHTML = localStorage.getItem("playerName");

  storyInstitute.innerHTML = localStorage.getItem("playerInstitute");
}

// Generate and download the Story Card
downloadBtn.addEventListener("click", function () {
  html2canvas(document.getElementById("storyCard"), { scale: 2 }).then(
    function (canvas) {
      const link = document.createElement("a");

      link.download = "CampusClashStoryCard.png";

      link.href = canvas.toDataURL("image/png");

      link.click();
    },
  );
});
