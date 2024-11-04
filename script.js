// Select the canvas element by its ID
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.fillStyle = "blue"; // Set the color to blue
ctx.fillRect(50, 50, 150, 100); // Draw rectangle

// Draw a circle
ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2); // Circle at (300, 150) with radius 50
ctx.fillStyle = "green"; // Set color to green
ctx.fill();
ctx.closePath();

// Draw a line
ctx.beginPath();
ctx.moveTo(50, 300); // Starting point
ctx.lineTo(400, 300); // End point
ctx.strokeStyle = "red"; // Set line color to red
ctx.lineWidth = 5; // Set line width
ctx.stroke(); // Draw line
ctx.closePath();

// Draw some text
ctx.font = "20px Arial";
ctx.fillStyle = "black";
ctx.fillText("Hello, Canvas!", 180, 400); // Position text

