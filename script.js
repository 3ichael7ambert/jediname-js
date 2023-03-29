// let btn = document.getElementById("myBtn");
// let init = false;
// const jediNameDiv = document.querySelector(".jediNameDiv");

// function jediBtn() {
//   btn.remove();
//   //alert("Function Setup!");
//   let firstName = document.getElementById("firstname");
//   let lastName = document.getElementById("lastname");
//   let maidenName = document.getElementById("maidenname");
//   let jediFirst;
//   //first 3 last, 2 fist
//   let jediLast;
//   //first three of mother maiden
//   function jediName(firstName, lastName, maidenName) {
//     jediFirst = lastName.slice(0, 3) + firstName.slice(0, 2);
//     jediLast = maidenName.slice(0, 3);
//     return jediFirst + " " + jediLast;
//     return (init = ture);
//   }
// }

// if (init) {
//   jediNameDiv.innerText = jediBtn;
// }

// const form = document.querySelector("#jediform");

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let firstName = document.getElementById("firstname").value;
//   let lastName = document.getElementById("lastname").value;
//   let maidenName = document.getElementById("maidenname").value;
//   let jediName = generateJediName(firstName, lastName, maidenName);

//   jediNameDiv.innerText = jediName;
// });

// let btn = document.getElementById("myBtn");
// let jediNameDiv = document.querySelector(".jediNameDiv");
// let init = false;

// function jediBtn() {
//   btn.remove();
//   let firstName = document.getElementById("firstname").value;
//   let lastName = document.getElementById("lastname").value;
//   let maidenName = document.getElementById("maidenname").value;

//   let jediFirst = lastName.slice(0, 3) + firstName.slice(0, 2);
//   let jediLast = maidenName.slice(0, 3);

//   let jediName = jediFirst + " " + jediLast;
//   init = true;

//   return jediName;
// }

// const form = document.querySelector("#jediform");
// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let jediName = jediBtn();
//   jediNameDiv.innerText = jediName;
// });

// if (init) {
//   jediNameDiv.innerText = jediBtn();
// }

let btn = document.getElementById("myBtn");
let jediNameDiv = document.querySelector(".jediNameDiv");

function jediBtn() {
  // btn.remove();

  let firstName = document.getElementById("firstname").value;
  let lastName = document.getElementById("lastname").value;
  let maidenName = document.getElementById("maidenname").value;

  let jediName = generateJediName(firstName, lastName, maidenName);

  jediNameDiv.innerText = jediName;
}

function generateJediName(firstName, lastName, maidenName) {
  let jediFirst = lastName.slice(0, 3) + firstName.slice(0, 2);
  jediFirst =
    jediFirst.charAt(0).toUpperCase() + jediFirst.slice(1).toLowerCase();
  let jediLast = maidenName.slice(0, 3);
  jediLast = jediLast.charAt(0).toUpperCase() + jediLast.slice(1).toLowerCase();

  return jediFirst + " " + jediLast;
}

const form = document.querySelector("#jediform");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  jediBtn();
});

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
