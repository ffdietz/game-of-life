let game = new Game();
let worldGame = new GameWorld(90,90, 10);

function setup() {
  createCanvas(800, 800);  
  game.setupGame();
}


function draw() {
  game.drawGame();
  //game.canvasCheck();

}

function keyPressed() {
  if (keyCode === 32) worldGame.restart();
}

function mouseWheel(event) {
  game.squareSize += event.delta;
}