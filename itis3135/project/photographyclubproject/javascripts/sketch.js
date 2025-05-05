// Interactive drawing with p5.js
// Based on p5.js examples

let col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  // Create canvas that fits in the container
  let canvas = createCanvas(800, 500);
  canvas.parent('drawing-container');
  background(240);
  
  // Instructions text
  textSize(16);
  textAlign(CENTER);
  fill(0);
  text("Draw with your mouse!", width/2, 30);
}

function draw() {
  // Only draw when mouse is pressed
  if (mouseIsPressed) {
    // Change color based on mouse position
    col.r = map(mouseX, 0, width, 0, 255);
    col.b = map(mouseY, 0, height, 255, 0);
    
    // Draw circle at mouse position
    noStroke();
    fill(col.r, col.g, col.b, 100);
    ellipse(mouseX, mouseY, 24, 24);
  }
}

function keyPressed() {
  // Change color when key is pressed
  if (key === 'r') {
    col.r = 255;
    col.g = 0;
    col.b = 0;
  } else if (key === 'g') {
    col.r = 0;
    col.g = 255;
    col.b = 0;
  } else if (key === 'b') {
    col.r = 0;
    col.g = 0;
    col.b = 255;
  } else if (key === 'c') {
    // Clear canvas
    background(240);
  } else {
    // Random color for any other key
    col.r = random(100, 255);
    col.g = random(100, 255);
    col.b = random(100, 255);
  }
}