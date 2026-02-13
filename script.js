const noBtn = document.getElementById("no-btn");
const yesBtn = document.getElementById("yes-btn");
const questionSection = document.getElementById("question-section");
const successMessage = document.getElementById("success-message");

// Function to move the "No" button
function moveButton() {
    // 1. Calculate safe boundaries (padding of 50px to keep it away from edges)
    const padding = 50;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    // 2. Generate random positions
    const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
    const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

    // 3. Apply position
    noBtn.style.position = "fixed"; 
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
    noBtn.style.zIndex = "1000"; // Ensure it's on top when moving
}

// "No" Button Events
noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Critical: stops the click from registering
    moveButton();
});

// "Yes" Button Event
yesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Yes clicked!"); // Debugging
    
    // Hide the question and the runaway button
    questionSection.classList.add("hidden");
    noBtn.style.display = "none";
    
    // Show the letter
    successMessage.classList.remove("hidden");
    
    // Change background to a romantic pink
    document.body.style.backgroundColor = "#f8bbd0";
    
    // Smooth scroll to top to ensure she sees the start of the letter
    window.scrollTo(0, 0);
});
