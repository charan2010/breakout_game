var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8e3ec772-4769-40d5-ab12-70d4b4341497","f35d4b2e-d743-4fdf-b97a-ea70b0fdf08e"],"propsByKey":{"8e3ec772-4769-40d5-ab12-70d4b4341497":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/KAKckB.0WJDP55kNGzIZIfW5wf7Rk5mG/category_sports/soccer_bw.png"},"f35d4b2e-d743-4fdf-b97a-ea70b0fdf08e":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe/category_vehicles/playerShip1_red.png","frameSize":{"x":99,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/1ZCSN4arCMQLcOqfshLRi_pXvNn2UhYe/category_vehicles/playerShip1_red.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//creates a variable named score.
var score = 0;
var gameState = "serve";

//creates the edges a sprite
createEdgeSprites();

//creates boxes from 1 - 16
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="blue";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="blue";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="blue";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="blue";
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="blue";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="blue";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="blue";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="blue";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

/* from < - >
first line = creates a paddle.
second line = set an animation for paddle.
*/

//<
var paddle = createSprite(200,360,100,20);
paddle.setAnimation("player");
//>

/* from < - >
first line = creates a ball.
second line = set an animation for ball.
third line = set the scale of ball to 0.1.
*/

//<
var ball = createSprite(200,200,20,20);
ball.setAnimation("ball");
ball.scale = 0.1;
//>

function draw() {
  //set the background to white.
  background("white");
  
  //fill green in text and write the score.
  fill("green");
  textSize(35);
  text("Score: " + score, 250, 30);
  
  if (gameState === "serve") {
    textSize(25);
    text("Welcome! press enter to start", 30, 200);
    //if enter is pressed the ball will move.
    if (keyDown("enter")) {
    ball.velocityX = 2;
    ball.velocityY = 3;
    gameState = "play";
    }
  }
  
  if (gameState === "play") {
      //paddle will move according to the x position of the mouse.
      paddle.x = World.mouseX;
      if (ball.isTouching(bottomEdge) || score === 16) {
        gameState = "end";
      } 
  }
  
  if(gameState === "end") {
    text("GAME OVER!!!", 80, 200);
  }
  
  //ball will bounceoff paddle, topEdge, rightEdge and leftEdge. 
  ball.bounceOff(paddle);
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(rightEdge);
  
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




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
