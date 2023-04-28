const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');
const stbutton = document.querySelector(".gameStart")

stbutton.addEventListener('click',gameStart);

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

document.addEventListener("keydown", keyDown);
function keyDown(event) {

    //up
    if (event.keyCode == 38 || event.keyCode == 87) {
    if (snake.direction.y == 1) return;
    snake.direction.y = -1;
    snake.direction.x = 0;

    }
    //down
    else if (event.keyCode == 40 || event.keyCode == 83) {
        if (snake.direction.y == -1) return;
        snake.direction.y = 1;
        snake.direction.x = 0;
    }
    //left
    else if (event.keyCode == 37 || event.keyCode == 65) {
        if (snake.direction.x == 1) return;
        snake.direction.y = 0;
        snake.direction.x = -1;
    }
    //right
    else if (event.keyCode == 39 || event.keyCode == 68) {
        if (snake.direction.x == -1) return;
        snake.direction.y = 0;
        snake.direction.x = 1;
    }

}

function eatApple() {

    if (snake.body[0].x === apple.x && snake.body[0].y === apple.y) {
    
    snake.size += 1;
    score++;
    putApple();
    
    }
    
}

function putApple() {

    for (let i=0; i<snake.body.length; i++) {
        
        if (snake.body[i].x === apple.x && snake.body[i].y === apple.y) {
            apple.x = Math.floor(Math.random() * BLOCK_SIZE);
            apple.y = Math.floor(Math.random() * BLOCK_SIZE);
            putApple();
            return;
        
        }
    
    }
    
}


function drawScore() {

    ctx.fillStyle = "white";
    ctx.font = "10px Verdana";
    ctx.fillText("Score " + score, canvas.width - 50, 10);
    
}

function checkDeath() {
    // hit walls
    if( (snake.body[0].x < 0) ||(snake.body[0].x >= BLOCK_SIZE)||(snake.body[0].y < 0) ||(snake.body[0].y >= BLOCK_SIZE)){
    
        clearInterval(gameInterval);
    
    }
    // hit body
    for (var i=1; i<snake.body.length; i++) {
    
        if (snake.body[0].x === snake.body[i].x && snake.body[0].y === snake.body[i].y) {
            clearInterval(gameInterval);
    
        }
    
    }
    
}


/////
gameStart()