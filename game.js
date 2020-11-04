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
        // for(let i = 0 ; i < width ; i += this.squareSize){
        //     for(let j = 0 ; j < height ; j+=this.squareSize){
        //         fill(255);
        //         rect(i, j, this.squareSize, this.squareSize);
        //     }
        // }
        for(let i = 0 ; i <= width ; i+= this.squareSize)    line(i,0,i,height);
        for(let j = 0 ; j <= height ; j+=this.squareSize)    line(0,j,width,j);
            
    }

    test(){            
        rect(mouseX,mouseY,100,100);
    }
}

