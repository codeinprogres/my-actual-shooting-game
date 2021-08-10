var player, playerImg1, playerImg2, playerImg3, playerImg4;
var PLAY, END, START, PAUSE, OPTIONS, RULES, CREDITS, SURE, OPTIONS1, CREDITS1;
PLAY = 1;
END = 0;
START = 2;
PAUSE = 3;
OPTIONS = 4;
RULES = 5;
CREDITS = 6;
SURE = 7;
OPTIONS1 = 8;
CREDITS1 = 9;
var gameState = PLAY;
var sniper, sniperImg1, sniperImg2, sniperImg3, sniperImg4;
var ground;
var laser, laser1Img, laser2Img, laser3Img, laser4Img;
var zombie, zombie1Img;
var zDog, zDogImg;
var jet;
var jet2;
var jetImg;
var jet2Img;
var zombiesGroup, zDogGroup, jetGroup1, jetGroup2;
var explosion;
var score;
var sound;
var button1, button2, button3, button4, button5, button6, button7, button8;

function preload(){
  playerImg1 = loadImage("carUp.png");
  playerImg2 = loadImage("carDown.png");
  playerImg3 = loadImage("carLeft.png");
  playerImg4 = loadImage("carRight.png");
  ground = loadImage("grass.png");
  sniperImg1 = loadImage("sniperUp.png");
  sniperImg2 = loadImage("sniperDown.png");
  sniperImg3 = loadImage("sniperLeft.png");
  sniperImg4 = loadImage("sniperRight.png");
  laser1Img = loadImage("laserUp.png");
  laser2Img = loadImage("laserDown.png");
  laser3Img = loadImage("laserLeft.png");
  laser4Img = loadImage("laserRight.png");
  zombie1Img = loadImage("zombie left.gif");
  explosion = loadImage("blowup.gif");
  zDogImg = loadAnimation("0.png", "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png");
  jetImg = loadImage("plane.png");
  jet2Img = loadImage("plane2.png");
  sound = loadSound("shot.mp3");
}

function setup(){
   createCanvas(800, 800);


   laser = createSprite(400, 400, 15, 30);
   laser.addImage(laser1Img);
   laser.scale = 0.25;
   laser.setCollider("rectangle", 0, 0, 350, 120);

   
   player = createSprite(400,400,60,60);
   player.addImage(playerImg1);
   player.scale = 0.25;

   sniper = createSprite(400, 400, 20, 40);
   sniper.addImage(sniperImg1);
   sniper.scale = 0.25;

zombiesGroup = new Group();
zDogGroup = new Group();
jetGroup1 = new Group();
jetGroup2 = new Group();

score = 0;
                                               
 
}

function draw(){
  if(gameState === PLAY){
      background(ground);

      if(keyDown("Up")){
        player.addImage(playerImg1);
        sniper.addImage(sniperImg1);
        laser.addImage(laser1Img);
        sound.play();

        laser.velocityY = -35;
        laser.velocityX = 0;


        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }


      if(keyDown("Down")){
        player.addImage(playerImg2);
        sniper.addImage(sniperImg2);
        laser.addImage(laser2Img);
        sound.play();


        laser.velocityY = 35;
        laser.velocityX = 0;

        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }

      if(keyDown("left")){
        player.addImage(playerImg3);
        sniper.addImage(sniperImg3);
        laser.addImage(laser3Img);
        sound.play();


        laser.velocityY = 0;
        laser.velocityX = -35;


        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
      }

      if(keyDown("right")){
        player.addImage(playerImg4);
        sniper.addImage(sniperImg4);
        laser.addImage(laser4Img);
        sound.play();

        laser.velocityY = 0;
        laser.velocityX = 35;

        
        if(laser.x = 0){
            laser.x = 400;
        }

        if(laser.x = 800){
            laser.x = 400;
        }

        if(laser.y = 0){
            laser.y = 400;
        }

        if(laser.y = 800){
            laser.y = 400;
        }
  }

  if(zombiesGroup.isTouching(laser)){
      zombiesGroup.destroyEach();
      score += 1;
  }

  if(zDogGroup.isTouching(laser)){
    zDogGroup.destroyEach();
    score += 1;
}

if(jetGroup1.isTouching(laser)){
    jetGroup1.destroyEach();
    score += 1;
}

if(jetGroup2.isTouching(laser)){
    jetGroup2.destroyEach();
    score += 1;
}


if(zDogGroup.isTouching(player)){
    gameState = END;
}

  if(zombiesGroup.isTouching(player)){
      gameState = END;
  }

  if(jetGroup1.isTouching(player)){
    gameState = END;
}

if(jetGroup2.isTouching(player)){
    gameState = END;
}

  zombieRight();
  zombieLeft();
  zombieDown();
  zombieUp();

  text("Score : " + score, 50, 50);
}


if(gameState === END){
    background("red");
    player.visible = false;
    sniper.visible = false;
    laser.visible = false;
    zombiesGroup.destroyEach();
    zDogGroup.destroyEach();
    jetGroup1.destroyEach();
    jetGroup2.destroyEach();
}

drawSprites();

}

function zombieRight(){
    if(frameCount%30 === 0){
        zDog = createSprite(900, 385, 50, 50);
        zDog.addAnimation("running", zDogImg);
        zDog.scale = 0.55;
        zDog.velocityX = -7;
        zDog.setCollider("rectangle", 0, 45, 300, 300);

        zDogGroup.add(zDog);
    }

}

function zombieLeft(){
  if(frameCount%30 === 0){
     zombie = createSprite(-100, 385, 50, 50);
     zombie.addImage(zombie1Img);
     zombie.scale = 0.25;
     zombie.velocityX = 7;
     zombie.setCollider("rectangle", 0, 45, 230, 500);

     zombiesGroup.add(zombie);
  }
}

function zombieDown(){
   if(frameCount%30 === 0){
      jet2 = createSprite(400, -100, 50, 50);
      jet2.addImage(jet2Img);
      jet2.velocityY = 7;
      jet2.scale = 0.25;

      jetGroup2.add(jet2);
   }
}

function zombieUp(){
    if(frameCount%30 === 0){
        jet = createSprite(400, 900, 50, 50);
        jet.addImage(jetImg);
        jet.velocityY = -7;
        jet.scale = 0.25;
  
        jetGroup1.add(jet);
     }
}

function reset(){
    gameState = PLAY;
    score = 0;
    zombiesGroup.destroyEach();
    zDogGroup.destroyEach();
    jetGroup1.destroyEach();
    jetGroup2.destroyEach();
}