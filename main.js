let systemWidth = 1500;
let systemHeight = 900;
let resolution = 10;

let game = new Game();
let system = new System(systemHeight,systemHeight, resolution);

function setup() {
  createCanvas(systemHeight, systemHeight);
  game.setupGame();
}


function draw() {
  if(frameCount % system.velocity === 0)    game.drawGame();

  system.addLive(mouseX, mouseY);

  //game.canvasCheck();

}

function keyPressed() {
  switch(keyCode){
    case 32:  system.pause = !system.pause; //  SPACEBAR
    break;

    case 90:  system.restart();             //  Z  
    break;

    case 37:  system.velocity--;            //LEFT ARROW
    break;

    case 39:  system.velocity++;            //RIGHT ARROW
    break;
  } 
}

function mouseWheel(event) {
  game.squareSize += event.delta;
}