var ground;

var groundback;

var monkey , monkey_running

var banana ,bananaImg, obstacle, obstacleImage, apple, appleImg

var FoodGroup, obstacleGroup

var score=0

var scoreA=0

var life=20000+80000

var gameState="Play"

var lifeM

var gameOver

function preload(){

backImg=loadImage("go_monkey_back.jpg")  

  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

bananaImg = loadImage("banana.png");
appleImg = loadImage("appile.png")
obstacleImg = loadImage("obstacle.png");

liveImg=loadImage("1200px-Heart_corazón.svg.png")
 
gameOverImg=loadImage("337-3376582_game-over-transparent-game-over-perler-bead.png")
  
}





function setup() {
createCanvas(1000, 500) 
  
ground=createSprite(500, 470, 1000, 10)
groundback=createSprite(1200, 250, 30, 30)
groundback.addImage("ground",backImg);
groundback.scale=2;
groundback.velocityX =-8;
groundback.x = groundback.width /2;


ground=createSprite(500, 475, 1000, 10)
ground.visible = false;
  
monkey=createSprite(130, 450, 10, 10)
monkey.addAnimation("running",monkey_running)
monkey.scale=0.2;  
 
scoreFr=createSprite(35, 25, 10, 10)
scoreFr.addImage(bananaImg)
scoreFr.scale=0.1
  
scoreFru=createSprite(125, 25, 10, 10)
scoreFru.addImage(appleImg)
scoreFru.scale=0.07  

lifeM=createSprite(210, 30, 10, 10)
lifeM.addImage(liveImg)
lifeM.scale=0.03
  
bananaG = new Group();
appleG = new Group();
obstacleG = new Group();
   
}

function bananago(){
banana = createSprite(1100, Math.round(random(60, 420)), 10, 10);
banana.addImage(bananaImg) 
banana.velocityX=-7;
banana.lifetime=700;
banana.scale=0.1;
bananaG.add(banana)
}

function applego(){
apple = createSprite(1000, Math.round(random(60, 420)), 10, 10);
apple.addImage(appleImg) 
apple.velocityX=-7;
apple.lifetime=700;
apple.scale=0.1;
appleG.add(apple)
}

function obstaclego(){
obstacle = createSprite(1000, Math.round(random(410, 460)), 10, 10);
obstacle.addImage(obstacleImg) 
obstacle.velocityX=-7;
obstacle.lifetime=700;
obstacle.scale=0.1;
obstacleG.add(obstacle)
}


function draw() {
//background("green");
  
if (groundback.x < 400){
groundback.x=605
}
if(keyDown("space") && monkey.y >= 159) {
  monkey.velocityY = -12;
 }
  monkey.velocityY = monkey.velocityY + 0.7 
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
monkey.collide(ground); 

var select_friut_Rock = Math.round(random(1,3))
console.log(select_friut_Rock)  
if(frameCount % 100 === 0){
if(select_friut_Rock === 1) {
 applego();
} else if(select_friut_Rock === 2){
  obstaclego();
} else if(select_friut_Rock === 3){
  bananago();
} 
}
  
if(bananaG.isTouching(monkey)){
   bananaG.destroyEach();
    score=score+1; 
   }    
if(appleG.isTouching(monkey)){
   appleG.destroyEach();
    scoreA=scoreA+1; 
   }    
if(obstacleG.isTouching(monkey)){
  obstacleG.destroyEach();
    life=life-1; 
   }    
 if(life===0){
   gameState="end"
 }
    
 
  
  
  
  
  

 drawSprites();
fill("yellow")
textSize(20)
text("="+score, 60, 35)
  
fill("brown")
textSize(20)
text("="+score, 150, 35)
  
fill("red")
textSize(25)
text("="+life, 230, 35)

}




















