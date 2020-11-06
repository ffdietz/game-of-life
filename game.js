
//https://spicyyoghurt.com/tutorials/downloads/game-of-life/game-of-life-spicy-yoghurt.html

class Game{

    setupGame(){
        ellipseMode(CORNER)
        noStroke();
    }

    drawGame(){
        system.velocity = constrain(system.velocity, 1, 30);
        system.gameLoop()
    }

    canvasCheck(){
        stroke(0);
        noFill();
        rect(0,0, width - 1, height - 1);

    }
}

class Cell{

    constructor(x_pos , y_pos, diam){
        
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.diam  = diam;

        this.alive = Math.floor(Math.random() * 2);
    }

    draw(){
        if(this.alive) fill('#505');
        else           fill('#FFF');

        circle(this.x_pos * this.diam, this.y_pos * this.diam, this.diam);
        //square(this.x_pos * this.diam, this.y_pos * this.diam, this.diam);
    }
}


class System {

    constructor( numColumns, numRows, resolution) {   
        this. resolution = resolution;

        this.numColumns =  numColumns /  this. resolution;
        this.numRows = numRows /  this. resolution;

        this.gameObjects = [];
        this.createGrid();

        //CONTROL VARIABLES
        this.pause = true;
        this.velocity = 1;
    }

    createGrid(){
        for (let y = 0; y < this.numRows; y++) {
            for (let x = 0; x < this.numColumns; x++) {
                this.gameObjects.push(new Cell(x, y, this.resolution));
            }
        }
    }

    isAlive(x, y){ 

        if (x < 0 || x >= this.numColumns || y < 0 || y >= this.numRows){
            return false;
        } 

        if(this.gameObjects[this.gridToIndex(x, y)].alive) return 1
        else return 0
    }

    gridToIndex(x, y){
        return  x + (y * this.numColumns);
    }

    checkSurrounding (){
        // Loop over all cells
        for (let x = 0; x < this.numColumns; x++) {
            for (let y = 0; y < this.numRows; y++) {

                // Count the nearby population
                let numAlive =  this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + 
                                this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + 
                                this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);

                let centerIndex = this.gridToIndex(x, y);

                
                if (numAlive === 2)      this.gameObjects[centerIndex].nextAlive = this.gameObjects[centerIndex].alive;

                else if (numAlive === 3) this.gameObjects[centerIndex].nextAlive = true;

                else                     this.gameObjects[centerIndex].nextAlive = false;
            
            }
        }

        // Apply the new state to the cells
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].alive = this.gameObjects[i].nextAlive;
        }
    }
    
    restart(x_pos, y_pos){
    for (let x = 0; x < this.numColumns; x++) {
        for (let y = 0; y < this.numRows; y++) {
            this.gameObjects[this.gridToIndex(x,y)].alive = Math.floor(Math.random() * 2);
            }
        }
    }

    addLive(x_pos, y_pos){

        console.log( this.gridToIndex(0,2) );
        
    }

    gameLoop() {

        background('#505');

        if(this.pause) this.checkSurrounding();

        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        }
    }
}