  
 let game = new Game();

function preload() {
  //game.preloadGame();
}

function setup() {
  createCanvas(500, 500);
  //game.setupGame();
}

function draw() {
  clear();
  game.drawGrid();  
  // game.drawCell();

  //game.test();
}

// function keyPressed() {
//   if (keyCode === 32) {
//   }
// }

// function mouseWheel(event) {
//   game.squareSize += event.delta;
//   //return false;
// }