
class Game{


    preloadGame(){
    }

    setupGame(){
    }

    drawGame(){
        worldGame.gameLoop()
    }
}

class Cell{

    static width = 10;
    static height = 10;

    constructor(x_pos , y_pos){
        
        this.x_pos = x_pos;
        this.y_pos = y_pos;

        this.alive = Math.floor(Math.random() * 2);
    }

    draw(){
        if(this.alive) fill('#A000A0');
        else           fill('#FFF');

        circle(this.x_pos * Cell.width, this.y_pos * Cell.height, Cell.width);
    }
}


class GameWorld {

    static numColumns = 100;
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

    isAlive(x, y)
    {
        if (x < 0 || x >= GameWorld.numColumns || y < 0 || y >= GameWorld.numRows){
            return false;
        }

        return this.gameObjects[this.gridToIndex(x, y)].alive?1:0;
    }

    gridToIndex(x, y){
        return x + (y * GameWorld.numColumns);
    }

    checkSurrounding ()
    {
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

        // Clear the screen
        
        clear();
        // Draw all the gameobjects
        for (let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].draw();
        }
    }
}