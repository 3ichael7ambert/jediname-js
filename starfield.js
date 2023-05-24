//////STARS////

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set number of stars
var numStars = 200;
var stars = [];

// Initialize stars
for (var i = 0; i < numStars; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    z: Math.random() * canvas.width
  });
}

// Draw stars
function draw() {
  // Clear canvas
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw stars
  ctx.fillStyle = "white";
  for (var i = 0; i < numStars; i++) {
    var star = stars[i];
    var x = (star.x - canvas.width / 2) * (canvas.width / star.z);
    var y = (star.y - canvas.height / 2) * (canvas.width / star.z);
    var r = 1.5 * (canvas.width / star.z);
    ctx.fillRect(x, y, r, r);
  }

  // Update star positions
  for (var i = 0; i < numStars; i++) {
    stars[i].z -= 0.2;

    // Reset star if it's too close or too far
    if (stars[i].z <= 0) {
      stars[i].x = Math.random() * canvas.width;
      stars[i].y = Math.random() * canvas.height;
      stars[i].z = canvas.width;
    }
  }

  // Call draw function again
  requestAnimationFrame(draw);
}

// Call draw function
draw();
