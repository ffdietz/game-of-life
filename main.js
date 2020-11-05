  
 let game = new Game(500,500);
 let cell = new Cell(this.context, 10, 10);

function preload() {
  console.log(cell);
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  //game.setupGame();
}

function draw() {
  clear();
  cell.draw();

  //game.drawGrid();  
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