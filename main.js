let game = new Game();
let worldGame = new GameWorld(80,100, 100);

function setup() {
  createCanvas(windowWidth-50, windowHeight-50);  
  //frameRate(1);
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