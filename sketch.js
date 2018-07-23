//Canvas setup
function setup(){
    createCanvas(600,600);
    for(let i=0; i<14;i++){
        e[i] = new Enemy(i*40 + 40,60);
    }
}
var x = 300;
var y = 540;
var e = [];
var life = 5;
var score = 0;

//Creates character + Enemies 
function draw(){
    background(0);
    moveBullet();
    drawGame();
    ellipse(x, y, 50, 50);
     if (keyIsDown(LEFT_ARROW)) {
         if(x>25){
             x -=5;
         }
        
        }
  
        if (keyIsDown(RIGHT_ARROW)) {
        
            if(x+30 <600){
                x +=5;
            }

    }
    if (keyIsDown(UP_ARROW)){
      bullets.push([x, y]);
    }
    for(let i=0; i<14;i++){
        e[i].drawEnemy();
        e[i].moveEnemy(); 
    }
}
//Enemies 
function Enemy (a, b){
    this.a =a;
    this.b =b;
    this.r =20;
    this.speedX = 5;

    this.drawEnemy = function(){
        fill('blue');
        noStroke();
        ellipse(this.a,this.b, this.r, this.r);
    }
    this.moveEnemy = function(){
        this.a += this.speedX;
        if(this.a > 600 || this.a <0){
            this.b += 40;
            this.speedX *= -1;
        }
    }

}




// use variables to represent the "state" of the game - information that represents what is going on
let spaceshipX = 10;
let bullets = [];
// draw our canvas
// update the game state when a key or mouse is pressed

// function that draws the state of the game
function drawGame(){
    for(let i=0; i<bullets.length; i++){
        let x = bullets[i][0];
        let y = bullets[i][1];
       ellipse(x, y, 2, 2);
        
      }   
    }

function moveBullet(){
    for(let i=0; i<bullets.length;i++){
        bullets[i][1] -=2.0;
}
}

function enemyDeath(){
if(dist(this.a,this.b,bullets[i][0],bullets[i][1])<=((this.r+this.r)/2)){
        isDead=true;
        if(isDead==true){
            alert("Game Over");
        }
}
}
