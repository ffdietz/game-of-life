  
 let game = new Game();
 let cells = new Cells(10,10);

function preload() {
  cells.arrayFill();
}

function setup() {
  createCanvas(800, 800);
  //game.setupGame();
}

function draw() {
  clear();
  game.drawGrid();  
  // game.drawCell();
}

// function keyPressed() {
//   if (keyCode === 32) {
//   }
// }

// function mouseWheel(event) {
//   game.squareSize += event.delta;
//   //return false;
// }