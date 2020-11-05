
//https://spicyyoghurt.com/tutorials/downloads/game-of-life/game-of-life-spicy-yoghurt.html

class Game{


    preloadGame(){
    }

    setupGame(){
        noStroke();
        ellipseMode(CORNER)
    }

    drawGame(){
        clear();
        worldGame.gameLoop()
    }
}

class Cell{

    constructor(x_pos , y_pos){
        
        this.x_pos = x_pos;
        this.y_pos = y_pos;
        this.diam = 20;

        this.alive = Math.floor(Math.random() * 2);
    }

    draw(){
        if(this.alive) fill('#F0F');
        else           fill('#CCC');

        circle(this.x_pos * this.diam, this.y_pos * this.diam, this.diam);
    }
}


class GameWorld {

    static numColumns = 50;
    static numRows = 100;

    constructor() {

        
        this.gameObjects = [];
        this.createGrid();
    }

    createGrid(){
        for (let y = 0; y < GameWorld.numRows; y++) {
            for (let x = 0; x < GameWorld.numColumns; x++) {
                this.gameObjects.push(new Cell(x, y));
            }
        }
    }

    isAlive(x, y){
        if (x < 0 || x >= GameWorld.numColumns || y < 0 || y >= GameWorld.numRows){
            return false;
        }

        return this.gameObjects[this.gridToIndex(x, y)].alive?1:0;
    }

    gridToIndex(x, y){
        return x + (y * GameWorld.numColumns);
    }

    checkSurrounding (){
        // Loop over all cells
        for (let x = 0; x < GameWorld.numColumns; x++) {
            for (let y = 0; y < GameWorld.numRows; y++) {

                // Count the nearby population
                let numAlive = this.isAlive(x - 1, y - 1) + this.isAlive(x, y - 1) + this.isAlive(x + 1, y - 1) + this.isAlive(x - 1, y) + this.isAlive(x + 1, y) + this.isAlive(x - 1, y + 1) + this.isAlive(x, y + 1) + this.isAlive(x + 1, y + 1);
                let centerIndex = this.gridToIndex(x, y);

                if (numAlive == 2){
                    // Do nothing
                    this.gameObjects[centerIndex].nextAlive = this.gameObjects[centerIndex].alive;
                }else if (numAlive == 3){
                    // Make alive
                    this.gameObjects[centerIndex].nextAlive = true;
                }else{
                    // Make dead
                    this.gameObjects[centerIndex].nextAlive = false;
                }
            }
        }

        // Apply the new state to the cells
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].alive = this.gameObjects[i].nextAlive;
        }
    }

    gameLoop() {
        // Check the surrounding of each cell
        this.checkSurrounding();

        // Draw all the gameobjects
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        }
    }
}