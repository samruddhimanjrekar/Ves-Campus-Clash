// ==========================================
// Campus Clash - Landing Page
// Handles follow verification before registration
// ==========================================

// Get the "I've Followed" button
const followBtn = document.getElementById("followBtn");

// When the user confirms they have followed
followBtn.addEventListener("click", function () {

    // Store follow status in localStorage
    localStorage.setItem("followed", "true");

    // Redirect user to the registration page
    window.location.href = "register.html";

});