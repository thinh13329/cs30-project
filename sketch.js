// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const WINDOW_WIDTH = 600;
const WINDOW_HEIGHT = 600;

async function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function draw() {
  background(220);

  circle(mouseX, mouseY, 50);
}