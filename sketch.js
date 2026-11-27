// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

const CELL_SIZE = 100;
let cols;
let rows;
let mapGrid = 
[ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

async function setup() {
  rows = Math.floor(windowHeight * 0.85/CELL_SIZE);
  cols = Math.floor(windowWidth * 0.85/ CELL_SIZE);
  let canvas = createCanvas(cols * CELL_SIZE, rows * CELL_SIZE);
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 50);
}