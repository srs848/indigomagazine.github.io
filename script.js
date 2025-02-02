let targetX = 0, targetY = 0; // Where the cursor/touch wants to go
let currentX = 0, currentY = 0; // Current position of the movement

// Function to smoothly animate the images
function smoothMove() {
  const wrappers = document.querySelectorAll('.floating-photo-wrapper');
  
  // Lerp (Linear Interpolation) for smoother movement
  currentX += (targetX - currentX) * 0.05; 
  currentY += (targetY - currentY) * 0.05;

  wrappers.forEach((wrapper) => {
    // Apply smoother transform
    wrapper.style.transform = `translate(${currentX}px, ${currentY}px)`;
  });

  requestAnimationFrame(smoothMove); // Continue the animation
}

// Mouse move event for desktop
document.addEventListener('mousemove', (event) => {
  targetX = (event.clientX - window.innerWidth / 2) / 10; // Increase divisor for quicker movement
  targetY = (event.clientY - window.innerHeight / 2) / 10;
});

// Touch move event for mobile
document.addEventListener('touchmove', (event) => {
  const touch = event.touches[0];
  targetX = (touch.clientX - window.innerWidth / 2) / 10;
  targetY = (touch.clientY - window.innerHeight / 2) / 10;
});

// Start the smooth movement loop
smoothMove();
