const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

function gameStart() {
    snake = {
    
        body: [ { x: BLOCK_SIZE / 2, y: BLOCK_SIZE / 2 } ],
        size: 5,
        direction: { x: 0, y: -1 }
    
    }
    apple = {
        x: 5,
        y: 5
        
    }
    gameInterval = setInterval(drawGame, 100);
    
}

const BLOCK_SIZE = 20;

let score = 0;

function drawGame() {
    drawMap();
    drawApple();
    drawSnake();
    eatApple();
    drawScore();
    checkDeath();
}

function drawMap() {

    ctx.fillStyle = 'black' ;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
}

function drawApple() {
    ctx.fillStyle = 'red';
    ctx.fillRect(
        apple.x * BLOCK_SIZE ,
        apple.y * BLOCK_SIZE ,
        BLOCK_SIZE ,
        BLOCK_SIZE
    );
    
}

function drawSnake(){
    moveSnake();
    ctx.fillStyle='lime';
    for (let i=0; i<snake.body.length; i++){
    
    ctx.fillRect(
        snake.body[i].x * BLOCK_SIZE,
        snake.body[i].y * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
    );
    
    }
    
}

function moveSnake() {
    newBlock = {
    
        x: snake.body[0].x + snake.direction.x,
        y: snake.body[0].y + snake.direction.y
    
    }
    snake.body.unshift(newBlock);
    while (snake.body.length > snake.size) {
    
        snake.body.pop();
    
    }
    
}
/////
gameStart()