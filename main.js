let systemWidth = 1500;
let systemHeight = 800;
let resolution = 20;

let game = new Game();
let system = new System(systemWidth,systemHeight, resolution);

function setup() {
  createCanvas(systemWidth-resolution, systemHeight-resolution);  
  //frameRate(1);
  game.setupGame();
}


function draw() {
  if(frameCount % system.velocity === 0)    game.drawGame();
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