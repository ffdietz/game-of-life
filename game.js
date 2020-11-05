class Game{

    static numColums = 10;
    static numRows = 10;

    constructor(){
        this.gameObjects = [];
        this.createGrid();
    }

    createGrid(){
        for(let i = 0 ; i < Game.numColums ; i++){
            for(let j = 0 ; j < Game.numRows ; j++){
                this.gameObjects.push(new Cell(this.context, i, j));
            }
        }
    }

    preloadGame(){
    }

    setupGame(){
    }

    drawGame(){
        
    }

}

class Cell{

    static width = 10;
    static height = 10;

    constructor(context, x_pos , y_pos){
        this.context = context;
        
        this.x_pos = x_pos;
        this.y_pos = y_pos;

        this.alive = Math.floor(Math.random() * 2);
    }

    draw(){
        // if(this.alive) this.context.fillStyle = '#ff8080';
        // else    '#303030';

        // this.context.fillRect(this.x_pos * Cell.width, this.y_pos * Cell.height, Cell.width, Cell.height)
        
        fill('#ff8080');
        ellipse(this.x_pos , this.y_pos , Cell.width, Cell.height);
    }
}
