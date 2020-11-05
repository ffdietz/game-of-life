let game = new Game();
let worldGame = new GameWorld();

function preload() {
}

function setup() {
  createCanvas(1000, 1000);
  noStroke();
  ellipseMode(CORNER)
}

function draw() {
  clear();
  game.drawGame();  

  //worldGame.gameLoop()
}

// function keyPressed() {
//   if (keyCode === 32) {
//   }
// }

// function mouseWheel(event) {
//   game.squareSize += event.delta;
//   //return false;
// }