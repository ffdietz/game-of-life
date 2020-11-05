let game = new Game();
let worldGame = new GameWorld();

function preload() {
}

function setup() {

  createCanvas(1000, 1000);
  game.setupGame();

}

function draw() {
  game.drawGame();  

}

function keyPressed() {
  if (keyCode === 32) worldGame.createGrid();
}

function mouseWheel(event) {
  game.squareSize += event.delta;
}