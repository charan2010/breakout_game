//creates a variable named score.
var score = 0;
var gameState = "serve";
var edges = [];
var ball, paddle, box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;

function setup() {
//creates the edges a sprite
edges = createEdgeSprites();


//creates boxes from 1 - 16
box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
box13 = createSprite(225, 125, 50, 50);
box13.shapeColor="blue";
box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

/* from < - >
first line = creates a paddle.
second line = set an animation for paddle.
*/

//<
paddle = createSprite(200,360,100,20);
//>

/* from < - >
first line = creates a ball.
second line = set an animation for ball.
third line = set the scale of ball to 0.1.
*/

//<
ball = createSprite(200,200,20,20);
//>
}

function draw() {
  //set the background to white.
  background("white");
  
  //fill green in text and write the score.
  fill("green");
  textSize(35);
  text("Score: " + score, 250, 30);
  
  if (gameState === "serve") {
    textSize(25);
    text("Welcome! press space to start", 30, 200);
    //if enter is pressed the ball will move.
    if (keyDown("SPACE")) {
    ball.velocityX = 2;
    ball.velocityY = 3;
    gameState = "play";
    }
  }
  
  if (gameState === "play") {
      //paddle will move according to the x position of the mouse.
      paddle.x = World.mouseX;
      if (ball.isTouching(edges[3]) || score === 16) {
        gameState = "end";
      } 
  }
  
  if(gameState === "end") {
    text("GAME OVER!!!", 80, 200);
  }
  
  //ball will bounceoff paddle, topEdge, rightEdge and leftEdge. 
  ball.bounceOff(paddle);
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  
  //if ball is touchind the boxes score will increase by 1 and boxes will be destroyed. 
  if (ball.isTouching(box1)) {
    score = score + 1;
    box1.destroy();
  }
  
  if (ball.isTouching(box2)) {
    score = score + 1;
    box2.destroy();
  }
  
  if (ball.isTouching(box3)) {
    score = score + 1;
    box3.destroy();
  }
  
  if (ball.isTouching(box4)) {
    score = score + 1;
    box4.destroy();
  }
  
  if (ball.isTouching(box5)) {
    score = score + 1;
    box5.destroy();
  }
  
  if (ball.isTouching(box6)) {
    score = score + 1;
    box6.destroy();
  }
  
  if (ball.isTouching(box7)) {
    score = score + 1;
    box7.destroy();
  }
  
  if (ball.isTouching(box8)) {
    score = score + 1;
    box8.destroy();
  }
  
  if (ball.isTouching(box9)) {
    score = score + 1;
    box9.destroy();
  }
  
  if (ball.isTouching(box10)) {
    score = score + 1;
    box10.destroy();
  }
  
  if (ball.isTouching(box11)) {
    score = score + 1;
    box11.destroy();
  }
  
  if (ball.isTouching(box12)) {
    score = score + 1;
    box12.destroy();
  }
  
  if (ball.isTouching(box13)) {
    score = score + 1;
    box13.destroy();
  }
  
  if (ball.isTouching(box14)) {
    score = score + 1;
    box14.destroy();
  }
  
  if (ball.isTouching(box15)) {
    score = score + 1;
    box15.destroy();
  }
  
  if (ball.isTouching(box16)) {
    score = score + 1;
    box16.destroy();
  }
  
  //this function is responsible for drawing all the sprites.
  drawSprites();
}