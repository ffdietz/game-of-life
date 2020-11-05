class Game{

    constructor(){
        this.squareSize = 20;
        }

    preloadGame(){

    }

    setupGame(){

        // this.background = new Background(this.backgroundImages);
        // this.player = new Player(this.playerImage);
        // this.obstacles = [];
        
    }

    drawGame(){

    }

    drawGrid(){
        background(0);
        stroke(100);
        for(let i = 0 ; i < width ; i += this.squareSize){
            for(let j = 0 ; j < height ; j+=this.squareSize){
                fill(255);
                rect(i, j, this.squareSize, this.squareSize);
            }
        }
        // for(let i = 0 ; i <= width ; i+= this.squareSize)    line(i,0,i,height);
        // for(let j = 0 ; j <= height ; j+=this.squareSize)    line(0,j,width,j);
            
    }

    test(){            
        rect(mouseX,mouseY,100,100);
    }

}

class Cells{

    constructor(cellsWidth, cellsHeight){
        this.width = cellsWidth;
        this.height = cellsHeight;
        this.array = [];
    }

    make2DArray(columns, rows){
        array = new Array(columns);
        for(let i = 0; i < arrayMaked.length ; i++){
            arrayMaked[i] = new Array(rows);
        }

    }

    arrayFill(){
        for(let i = 0 ; i < this.width ; i++){
            for(let j = 0 ; j < this.height ; j++){
                this.array[i][j] = Math.floor(Math.random(10));
            }
        }
    }
}
