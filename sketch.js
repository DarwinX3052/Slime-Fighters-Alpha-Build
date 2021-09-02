/* Licence

  @Copyright DarwinX3052 2021
  
  Game Name: Slime Fighters
  
  Build: Alpha 0.5.2
  
  Credits:
  Music by: Me
  Sounds: SoundBible.com */

//Variables

//AUNI VARIABLES
var cl = 0;
//Platforms
//Normal
var cp1, cp2, cp3, cp4, cp5;
//Bouncy
var cb1, cb2;
//Hurt
var ch1;


//Title & start
var tImg, t;

var oP, oPi, tP, tPi;

var gs = "no";

var ps = 0;

//Title Song
var tsng;

var tsS = "yes";

//Help
var help = "no";
var himg, h;
//Help Song
var csng;

var csS = "no";

//Sounds
var jump, die, hit, splat;

//Player 1 & 2 & bot
var hit = 0;
var hit1 = 0;

var hit2 = 0;

//P1
var p1;
var s1, s2, s3, s4;
var p1i1, p1i2, p1i3, p1i4;
var p1c = 1;
var p1h;
//P1 HP & other slimes
var ph1 = 500;
var psm1 = 4;
//P2
var p2;
var z1, z2, z3, z4;
var p2i1, p2i2, p2i3, p2i4;
var p2c = 1;
var p2h;
//P2 HP & other slimes
var ph2 = 500;
var psm2 = 4;
//Bot
var b;
var b1, b2, b3, b4;
var bi1, bi2, bi3, bi4;
var bc = 1;
var bh;
//Bot HP & other slimes
var bh = 500;
var bm1 = 4;

//P1 - Bot Images
var pi1, pi2, pi3, pi4, bbi1;
var pp1, pp2, pp3, pp4;
var bb1;

//Background
var bg;

//Levels
var l = 0;
var lvl = 0;

//Platforms
//Normal
var pf1, pf2, pf3, pf4, pf5, pf6, pf7, pf8, pf9, pf0;
//Bouncy
var bp1, bp2, bp3, bp4, bp5, bpi, bpi2;
//Hurtful
var h1, h2, h3, h4, h5, h6;

function preload(){
  //Background
  bg = loadImage("background.png");
  //Title image & 1p + 2p images
  tImg = loadImage("title.png");
  oPi = loadImage("1p.png");
  tPi = loadImage("2p.png");
  //Title Song && Sound Effects
  //Title Song
  tsng = loadSound("TitleTheme.wav");
  //SFX
  jump = loadSound("Jump.wav");
  die = loadSound("Die.wav");
  hit = loadSound("Hit Sound Effect.wav");
  splat = loadSound("Splat.wav");
  //Player Sprites
  //P1
  p1i1 = loadImage("s1.png");
  p1i2 = loadImage("s2.png");
  p1i3 = loadImage("s3.png");
  p1i4 = loadImage("s4.png");
  //P2
  p2i1 = loadImage("s1.png");
  p2i2 = loadImage("s2.png");
  p2i3 = loadImage("s3.png");
  p2i4 = loadImage("s4.png");
  //Bot
  bi1 = loadImage("s1.png");
  bi2 = loadImage("s2.png");
  bi3 = loadImage("s3.png");
  bi4 = loadImage("s4.png");

  //SpringBoardImg
  bpi = loadImage("springboard.png");
  bpi2 = loadImage("springboard2.png");

  //Help
  himg = loadImage("help.png");

  //Help sfx
  csng = loadSound("Space.wav");

  //Player Icons
  pi1 = loadImage("p1icon.png");
  pi2 = loadImage("p2icon.png");
  pi3 = loadImage("p3icon.png");
  pi4 = loadImage("p4icon.png");
  bbi = loadImage("comicon.png");
  
  //Player hit
  p1h = loadImage("hit.png");
  p2h = loadImage("hit.png");
}
function setup(){
  //Canvas
  createCanvas(800, 800); 

  //AUNI MODE LEVEL DESIGN
  //l1
  cp1 = createSprite(200, 400, 350, 75);
  cp2 = createSprite(500, 700, 350, 75);
  cp1.shapeColor = "green";
  cp2.shapeColor = "green";
  //l2
  cp3 = createSprite(400, 300, 350, 75);
  cp4 = createSprite(400, 750, 250, 75);
  cp3.shapeColor = "brown";
  cp4.shapeColor = "brown";

  cb1 = createSprite(200, 400, 50, 25);
  cb1.shapeColor = "red";
  //l3
  cp5 = createSprite(400, 400, 500, 75);
  cp5.shapeColor = "magenta";
  
  cb2 = createSprite(300, 600, 150, 25);
  ch1 = createSprite(500, 300, 100, 100);
  cb2.shapeColor = "red";
  ch1.shapeColor = "black";

  cp1.visible = false;
  cp2.visible = false;
  cp3.visible = false;
  cp4.visible = false;
  cp5.visible = false;
  cb1.visible = false;
  cb2.visible = false;
  ch1.visible = false;
  
  
  
  //P1 & P2
  p1 = createSprite(200, 400, 50, 50);
  p1.addImage(p1i1);
  p1.scale = 0.5;
  p1.visible = false;
  p2 = createSprite(600, 400, 50, 50);
  p2.addImage(p2i1);
  p2.scale = 0.5;
  p2.visible = false;
  b = createSprite(600, 400, 50, 50);
  b.addImage(p2i1);
  b.scale = 0.5;
  b.visible = false;
  pp1 = createSprite(500, 50, 50, 50);
  pp1.addImage(pi1);
  pp1.scale = 0.25;
  pp2 = createSprite(500, 150, 50, 50);
  pp2.addImage(pi2);
  pp2.scale = 0.25;
  bb1 = createSprite(500, 150, 50, 50);
  bb1.addImage(bbi);
  bb1.scale = 0.25;
  pp1.visible = false;
  pp2.visible = false;
  bb1.visible = false;

  //Title & 1p +2p
  t = createSprite(400, 200, 50, 50);
  t.addImage(tImg);
  t.scale = 0.5;
  t.visible = true;
  oP = createSprite(150, 600, 50, 50);
  oP.addImage(oPi);
  oP.scale = 0.25;
  oP.visible = true;
  tP = createSprite(350, 600, 50, 50);
  tP.addImage(tPi);
  tP.scale = 0.25;
  tP.visible = true;


  //Level Maps
  //L1
  pf1 = createSprite(400, 775, 600, 75);
  //L2
  pf2 = createSprite(350, 650, 400, 75);
  bp1 = createSprite(600, 500, 50, 25);
  //L3
  pf3 = createSprite(300, 500, 500, 75);
  h1 = createSprite(700, 400, 150, 150);
  //L4
  pf4 = createSprite(200, 600, 300, 75);
  pf5 = createSprite(500, 400, 300, 75);
  bp2 = createSprite(500, 700, 50, 25);
  bp3 = createSprite(200, 400, 50, 25);
  //L5
  pf6 = createSprite(500, 600, 500, 75);
  pf7 = createSprite(400, 300, 200, 75);
  h2 = createSprite(100, 400, 100, 250);
  //L6
  //pf8, 9, and 10 are Moving Platforms
  pf8 = createSprite(400, 600, 200, 500);
  h3 = createSprite(200, 400, 150, 150);
  h4 = createSprite(600, 400, 150, 150);
  //L7
  pf9 = createSprite(300, 500, 200, 275);
  pf0 = createSprite(500, 500, 200, 275);
  //L8
  bp4 = createSprite(600, 400, 250, 25);
  bp5 = createSprite(300, 600, 250, 25);
  h5 = createSprite(200, 400, 50, 250);
  h6 = createSprite(600, 600, 50, 250);

  //Level Color + Bouncy color + Hurt Color
  pf1.shapeColor = "lightgreen";
  pf2.shapeColor = "green";
  pf3.shapeColor = "darkgreen";
  pf4.shapeColor = "orange";
  pf5.shapeColor = "orange";
  pf6.shapeColor = "brown";
  pf7.shapeColor = "brown";
  pf8.shapeColor = "pink";
  pf9.shapeColor = "purple";
  pf0.shapeColor = "purple";

  bp1.shapeColor = "red";
  bp2.shapeColor = "red";
  bp3.shapeColor = "red";
  bp4.shapeColor = "red";
  bp5.shapeColor = "red";

  h1.shapeColor = "black";
  h2.shapeColor = "black";
  h3.shapeColor = "black";
  h4.shapeColor = "black";
  h5.shapeColor = "black";
  h6.shapeColor = "black";

  pf1.visible = false;
        pf2.visible = false;
        pf3.visible = false;
        pf4.visible = false;
        pf5.visible = false;
        pf6.visible = false;
        pf7.visible = false;
        pf8.visible = false;
        pf9.visible = false;
        pf0.visible = false;
      
        bp1.visible = false;
        bp2.visible = false;
        bp3.visible = false;
        bp4.visible = false;
        bp5.visible = false;
      
        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;
        h6.visible = false;

        pf8.velocityX = 4;
        pf9.velocityX = -4;
        pf0.velocityX = 4;

        //Help
        h = createSprite(550, 600, 50, 50);
        h.addImage(himg);
        h.scale = 0.5;


}
function draw(){
  //Background
  background("lightblue");

  //Songs
  //Song Played???
  if (gs === "no"){
    if (tsS === "yes"){
      tsng.play();
      tsS = "no";
    }
  }else{
    tsng.stop();
  }
  if (gs === "help"){
    if (csS === "yes"){
      csng.play();
      csS = "no";
    }
  }else{
    csng.stop();
  }
  //Start
  if (mousePressedOver(oP) && gs === "no"){
    ps = 1;
    cl = Math.round(random(1,3));
    gs = "1p";
    t.visible = false;
    oP.visible = false;
    tP.visible = false;
    h.visible = false;
    auni();
  }
  if (mousePressedOver(tP) && gs === "no"){
    ps = 2;
    gs = "yes";
    t.visible = false;
    oP.visible = false;
    tP.visible = false;
    h.visible = false;
  }
  if (mousePressedOver(h) && gs === "no"){
    gs = "help";
    csS = "yes";
    t.visible = false;
    oP.visible = false;
    tP.visible = false;
    h.visible = false;
    
  }
  if (gs === "help"){
    background("black");
    fill("white");
    textSize(20)
    text("Press Esc to exit help menu.....", 50, 50);

    fill("green");
    text("For player 1, use A and D to move left and right.", 50, 150);
    text("Pressed W to jump... press Q to attack and S to do a ground pound in air.", 50, 200);
    text("To change the stats of the player, press R.", 50, 250);

    fill("red")
    text("Same thing with player 2 exept different keys.", 50, 350);

    fill("blue");
    text("For player 2, use <- and -> to move left and right.", 50, 450);
    text("Pressed ↑ to jump... press O to attack and ↓ to do a ground pound in air.", 50, 500);
    text("To change the stats of the player, press P.", 50, 550);

    fill("yellow")
    text("These are the basics!!!", 50, 650);
  }
  if (keyDown("Esc") && gs === "help"){
    tsS = "yes";
    ps = 0;
    gs = "no";
    t.visible = true;
    oP.visible = true;
    tP.visible = true;
    h.visible = true;
  }
  if (gs === "maybe"){
    background(bg);
    fill("black");
    textSize(20);
    text("Press Esc to exit to menu", 50, 75);
    textSize(25);
    text("P1 HP: " + ph1, 620, 50);
    text("P2 HP: " + ph2, 620, 150);
    p1.visible = true;
    if (lvl === 0){
      l = 1;
      lvl = 1;
    }
  }
  if (gs === "auni"){
    background(bg);
    fill("black");
    textSize(20);
    text("Press Esc to exit to menu", 50, 75);
    textSize(25);
    text("P1 HP: " + ph1, 620, 50);
    text("BOT HP: " + bh, 620, 150);
    p1.visible = true;
    b.visible = true;
  }
  

  //Go Back to Menu
  if (keyDown("Esc") && gs === "maybe"){
    ph1 = 500;
    p2h = 500;
    tsS = "yes";
    ps = 0;
    gs = "no";
    t.visible = true;
    oP.visible = true;
    tP.visible = true;
    h.visible = true;
    l = 0;
    lvl = 0;

    pf1.visible = false;
        pf2.visible = false;
        pf3.visible = false;
        pf4.visible = false;
        pf5.visible = false;
        pf6.visible = false;
        pf7.visible = false;
        pf8.visible = false;
        pf9.visible = false;
        pf0.visible = false;
      
        bp1.visible = false;
        bp2.visible = false;
        bp3.visible = false;
        bp4.visible = false;
        bp5.visible = false;
      
        h1.visible = false;
        h2.visible = false;
        h3.visible = false;
        h4.visible = false;
        h5.visible = false;
        h6.visible = false;
  }
  if (keyDown("Esc") && gs === "auni"){
    ph1 = 500;
    bh = 500;
    tsS = "yes";
    ps = 0;
    gs = "no";
    t.visible = true;
    oP.visible = true;
    tP.visible = true;
    h.visible = true;
    cl = 0;
    b.visible = false;
    p1.visible = false;
    cp1.visible = false;
  cp2.visible = false;
  cp3.visible = false;
  cp4.visible = false;
  cp5.visible = false;
  cb1.visible = false;
  cb2.visible = false;
  ch1.visible = false;
  }

  //Start Game
  if (gs === "yes"){
    psm1 = 4;
    psm2 = 4;
    ph1 = 500;
    ph2 = 500;
    p1.x = 400;
    p1.y = 0
    p2.x = 400;
    p2.y = 0
    gs = "maybe";
    p1.visible = true;
    p2.visible = true;
    pp1.visible = true;
    pp2.visible = true;
}
if (gs === "1p"){
  psm1 = 4;
  bm = 4;
  ph1 = 500;
  bh = 500;
  p1.x = 400;
  p1.y = 0
  b.x = 400;
  b.y = 0
  gs = "auni";
  p1.visible = true;
  b.visible = true;
  pp1.visible = true;
  bb1.visible = true;
}
if (gs === "no"){
    background("lightblue");
    p1.visible = false;
    p2.visible = false;
    pp1.visible = false;
    pp2.visible = false;
    bb1.visible = false;
    p1.x = 200;
    p2.x = 600;
}
if (keyWentDown("r") && gs === "maybe"){
    p1c = p1c + 1;
    if (p1c === 1){
        p1.addImage(p1i1);
    }
    if (p1c === 2){
        p1.addImage(p1i2);
    }
    if (p1c === 3){
        p1.addImage(p1i3);
    }
    if (p1c === 4){
        p1.addImage(p1i4);
    }
    if (p1c === 5){
        p1c = 1;
        p1.addImage(p1i1);
    }
}
if (keyWentDown("p") && gs === "maybe"){
  p2c = p2c + 1;
  if (p2c === 1){
      p2.addImage(p2i1);
  }
  if (p2c === 2){
      p2.addImage(p2i2);
  }
  if (p2c === 3){
      p2.addImage(p2i3);
  }
  if (p2c === 4){
      p2.addImage(p2i4);
  }
  if (p2c === 5){
      p2c = 1;
      p2.addImage(p2i1);
  }
}
if (keyDown("a")){
    if (p1c === 1){
      p1.x = p1.x + -6;
    }
    if (p1c === 2){
      p1.x = p1.x + -5;
    }
    if (p1c === 3){
      p1.x = p1.x + -6;
    }
    if (p1c === 4){
      p1.x = p1.x + -7;
    }
    p1.mirrorX(-1);
}
if (keyDown("d")){
  if (p1c === 1){
    p1.x = p1.x + 6;
  }
  if (p1c === 2){
    p1.x = p1.x + 5;
  }
  if (p1c === 3){
    p1.x = p1.x + 6;
  }
  if (p1c === 4){
    p1.x = p1.x + 7;
  }
  p1.mirrorX(1);
}
if (keyDown("Left")){
  if (p2c === 1){
    p2.x = p2.x + -6;
  }
  if (p2c === 2){
    p2.x = p2.x + -5;
  }
  if (p2c === 3){
    p2.x = p2.x + -6;
  }
  if (p2c === 4){
    p2.x = p2.x + -7;
  }
  p2.mirrorX(-1);
}
if (keyDown("Right")){
  if (p2c === 1){
    p2.x = p2.x + 6;
  }
  if (p2c === 2){
    p2.x = p2.x + 5;
  }
  if (p2c === 3){
    p2.x = p2.x + 6;
  }
  if (p2c === 4){
    p2.x = p2.x + 7;
  }
  p2.mirrorX(1);
}
//Attack
//Normal
if (keyWentDown("q")){
  if (p1.isTouching(p2)){
    splat.play();
    if (p1c === 1){
      if (p1.x > p2.x){
        p2.x = p2.x + -20;
      }
      if (p1.x < p2.x){
        p2.x = p2.x + 20;
      }
    }
    if (p1c === 2){
      if (p1.x > p2.x){
        p2.x = p2.x + -40;
      }
      if (p1.x < p2.x){
        p2.x = p2.x + 40;
      }
    }
    if (p1c === 3){
      if (p1.x > p2.x){
        p2.x = p2.x + -15;
      }
      if (p1.x < p2.x){
        p2.x = p2.x + 15;
      }
    }
    if (p1c === 4){
      if (p1.x > p2.x){
        p2.x = p2.x + -30;
      }
      if (p1.x < p2.x){
        p2.x = p2.x + 30;
      }
    }
    if (p1.isTouching(p2)){
      if (p1c === 1){
        ph2 = ph2 - 10;
      }
      if (p1c === 2){
        ph2 = ph2 - 20;
      }
      if (p1c === 3){
        ph2 = ph2 - 10;
      }
      if (p1c === 4){
        ph2 = ph2 - 15;
      }
      p2.addImage(p2h);
      hit1 = 1
    }
}
}
if (keyWentDown("o")){
  if (p2.isTouching(p1)){
    splat.play();
    if (p2c === 1){
      if (p2.x > p1.x){
        p1.x = p1.x + -20;
      }
      if (p2.x < p1.x){
        p1.x = p1.x + 20;
      }
    }
    if (p2c === 2){
      if (p2.x > p1.x){
        p1.x = p1.x + -40;
      }
      if (p2.x < p1.x){
        p1.x = p1.x + 40;
      }
    }
    if (p2c === 3){
      if (p2.x > p1.x){
        p1.x = p1.x + -15;
      }
      if (p2.x < p1.x){
        p1.x = p1.x + 15;
      }
    }
    if (p2c === 4){
      if (p2.x > p1.x){
        p1.x = p1.x + -30;
      }
      if (p2.x < p1.x){
        p1.x = p1.x + 30;
      }
    }
  }
  if (p2.isTouching(p1)){
  if (p2c === 1){
    ph1 = ph1 - 10;
  }
  if (p2c === 2){
    ph1 = ph1 - 20;
  }
  if (p2c === 3){
    ph1 = ph1 - 10;
  }
  if (p2c === 4){
    ph1 = ph1 - 15;
  }
  p1.addImage(p1h);
  hit = 1;
}
}
if (hit === 1){
  hit = 0;
  if (frameCount % 2 === 0){
    if (p1c === 1){
      p1.addImage(p1i1);
  }
  if (p1c === 2){
      p1.addImage(p1i2);
  }
  if (p1c === 3){
      p1.addImage(p1i3);
  }
  if (p1c === 4){
      p1.addImage(p1i4);
  }
  }
}
if (hit1 === 1){
  hit1 = 0;
  if (frameCount % 2 === 0){
    if (p2c === 1){
      p2.addImage(p2i1);
  }
  if (p2c === 2){
      p2.addImage(p2i2);
  }
  if (p2c === 3){
      p2.addImage(p2i3);
  }
  if (p2c === 4){
      p2.addImage(p2i4);
  }
  }
}
//Jumping

if (keyDown("w") && l === 1 && p1.collide(pf1)){
    if (p1c === 1){
      p1.velocityY = -15;
    }
    if (p1c === 2){
      p1.velocityY = -15;
    }
    if (p1c === 3){
      p1.velocityY = -20;
    }
    if (p1c === 4){
      p1.velocityY = -10;
    }
    jump.play();
}
if (keyDown("w") && l === 2 && p1.collide(pf2)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 2 && p1.collide(bp1)){
  if (p1c === 1){
    p1.velocityY = -25;
  }
  if (p1c === 2){
    p1.velocityY = -25;
  }
  if (p1c === 3){
    p1.velocityY = -30;
  }
  if (p1c === 4){
    p1.velocityY = -20;
  }
  jump.play();
}
if (keyDown("w") && l === 3 && p1.collide(pf3)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 3 && p1.collide(h1)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 4 && p1.collide(pf4)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 4 && p1.collide(pf5)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 4 && p1.collide(bp2)){
  if (p1c === 1){
    p1.velocityY = -25;
  }
  if (p1c === 2){
    p1.velocityY = -25;
  }
  if (p1c === 3){
    p1.velocityY = -30;
  }
  if (p1c === 4){
    p1.velocityY = -20;
  }
  jump.play();
}
if (keyDown("w") && l === 4 && p1.collide(bp3)){
  if (p1c === 1){
    p1.velocityY = -25;
  }
  if (p1c === 2){
    p1.velocityY = -25;
  }
  if (p1c === 3){
    p1.velocityY = -30;
  }
  if (p1c === 4){
    p1.velocityY = -20;
  }
  jump.play();
}
if (keyDown("w") && l === 5 && p1.collide(pf6)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 5 && p1.collide(pf7)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 5 && p1.collide(h2)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 6 && p1.collide(pf8)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 6 && p1.collide(h3)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 6 && p1.collide(h4)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 7 && p1.collide(pf9)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 7 && p1.collide(pf0)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 8 && p1.collide(bp4)){
  if (p1c === 1){
    p1.velocityY = -25;
  }
  if (p1c === 2){
    p1.velocityY = -25;
  }
  if (p1c === 3){
    p1.velocityY = -30;
  }
  if (p1c === 4){
    p1.velocityY = -20;
  }
  jump.play();
}
if (keyDown("w") && l === 8 && p1.collide(bp5)){
  if (p1c === 1){
    p1.velocityY = -25;
  }
  if (p1c === 2){
    p1.velocityY = -25;
  }
  if (p1c === 3){
    p1.velocityY = -30;
  }
  if (p1c === 4){
    p1.velocityY = -20;
  }
  jump.play();
}
if (keyDown("w") && l === 8 && p1.collide(h5)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}
if (keyDown("w") && l === 8 && p1.collide(h6)){
  if (p1c === 1){
    p1.velocityY = -15;
  }
  if (p1c === 2){
    p1.velocityY = -15;
  }
  if (p1c === 3){
    p1.velocityY = -20;
  }
  if (p1c === 4){
    p1.velocityY = -10;
  }
  jump.play();
}

//P2 Jump

if (keyDown("Up") && l === 1 && p2.collide(pf1)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 2 && p2.collide(pf2)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 2 && p2.collide(bp1)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 3 && p2.collide(pf3)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 3 && p2.collide(h1)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 4 && p2.collide(pf4)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 4 && p2.collide(pf5)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 4 && p2.collide(bp2)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 4 && p2.collide(bp3)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 5 && p2.collide(pf6)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 5 && p2.collide(pf7)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 5 && p2.collide(h2)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 6 && p2.collide(pf8)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 6 && p2.collide(h3)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 6 && p2.collide(h4)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 7 && p2.collide(pf9)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 7 && p2.collide(pf0)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 8 && p2.collide(bp4)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 8 && p2.collide(bp5)){
  if (p2c === 1){
    p2.velocityY = -25;
  }
  if (p2c === 2){
    p2.velocityY = -25;
  }
  if (p2c === 3){
    p2.velocityY = -30;
  }
  if (p2c === 4){
    p2.velocityY = -20;
  }
  jump.play();
}
if (keyDown("Up") && l === 8 && p2.collide(h5)){
  if (p2c === 1){
    p2.velocityY = -15;
  }
  if (p2c === 2){
    p2.velocityY = -15;
  }
  if (p2c === 3){
    p2.velocityY = -20;
  }
  if (p2c === 4){
    p2.velocityY = -10;
  }
  jump.play();
}
if (keyDown("Up") && l === 8 && p2.collide(h6)){
if (p2c === 1){
  p2.velocityY = -15;
}
if (p2c === 2){
  p2.velocityY = -15;
}
if (p2c === 3){
  p2.velocityY = -20;
}
if (p2c === 4){
  p2.velocityY = -10;
}
jump.play();
}
//Ground Pound and Fall
if (keyDown("s")){
    p1.velocityY = p1.velocityY + 0.6;
    if (p1c === 1){
    if (p1.isTouching(p2)){
      if (p1.x > p2.x){
        p2.x = p2.x + -50;
      }
    }
    if (p1.isTouching(p2)){
      if (p1.x < p2.x){
        p2.x = p2.x + 50;
      }
    }
    if (p1c === 1){
      if (p1.isTouching(p2)){
        ph2 = ph2 - 20;
      }
    }
  }
  if (p1c === 2){
    p1.velocityY = p1.velocityY + 0.6;
    if (p1.isTouching(p2)){
      if (p1.x > p2.x){
        p2.x = p2.x + -50;
      }
    }
    if (p1.isTouching(p2)){
      if (p1.x < p2.x){
        p2.x = p2.x + 50;
      }
    }
    if (p1c === 1){
      if (p1.isTouching(p2)){
        ph2 = ph2 - 20;
      }
    }
  }
  if (p1c === 3){
    p1.velocityY = p1.velocityY + 0.5;
    if (p1.isTouching(p2)){
      if (p1.x > p2.x){
        p2.x = p2.x + -40;
      }
    }
    if (p1.isTouching(p2)){
      if (p1.x < p2.x){
        p2.x = p2.x + 40;
      }
    }
    if (p1c === 1){
      if (p1.isTouching(p2)){
        ph2 = ph2 - 20;
      }
    }
  }
  if (p1c === 4){
    p1.velocityY = p1.velocityY + 1.8;
    if (p1.isTouching(p2)){
      if (p1.x > p2.x){
        p2.x = p2.x + -80;
      }
    }
    if (p1.isTouching(p2)){
      if (p1.x < p2.x){
        p2.x = p2.x + 80;
      }
    }
    if (p1c === 1){
      if (p1.isTouching(p2)){
        ph2 = ph2 - 20;
      }
    }
  }
}else{
  p1.velocityY = p1.velocityY + 0.4;
}
if (keyDown("Down")){
  if (p2c === 1){
    p2.velocityY = p2.velocityY + 0.6;
    if (p2.isTouching(p1)){
      if (p2.x > p1.x){
        p1.x = p1.x + -50;
      }
    }
    if (p2.isTouching(p1)){
      if (p2.x < p1.x){
        p1.x = p1.x + 50;
      }
    }
    if (p1.isTouching(p2)){
      ph1 = ph1 - 20;
    }
  }
  if (p2c === 2){
    p2.velocityY = p2.velocityY + 0.6;
    if (p2.isTouching(p1)){
      if (p2.x > p1.x){
        p1.x = p1.x + -50;
      }
    }
    if (p2.isTouching(p1)){
      if (p2.x < p1.x){
        p1.x = p1.x + 50;
      }
    }
    if (p1.isTouching(p2)){
    ph1 = ph1 - 20;
  }
  if (p1.isTouching(p2)){
    ph1 = ph1 - 20;
  }
  }
  if (p2c === 3){
    p2.velocityY = p2.velocityY + 0.5;
    if (p2.isTouching(p1)){
      if (p2.x > p1.x){
        p1.x = p1.x + -40;
      }
    }
    if (p2.isTouching(p1)){
      if (p2.x < p1.x){
        p1.x = p1.x + 40;
      }
    }
    if (p1.isTouching(p2)){
      ph1 = ph1 - 20;
    }
  }
  if (p2c === 4){
    p2.velocityY = p2.velocityY + 1.8;
    if (p2.isTouching(p1)){
      if (p2.x > p1.x){
        p1.x = p1.x + -80;
      }
    }
    if (p2.isTouching(p1)){
      if (p2.x < p1.x){
        p1.x = p1.x + 80;
      }
    }
    if (p1.isTouching(p2)){
      ph1 = ph1 - 20;
    }
  }
}else{
  p2.velocityY = p2.velocityY + 0.4;
}
//Sensing Hurt Block
if (l === 3 && p1.collide(h1)){
  ph1 = ph1 - 1;
}
if (l === 5 && p1.collide(h2)){
  ph1 = ph1 - 1;
}
if (l === 6 && p1.collide(h3)){
  ph1 = ph1 - 1;
}
if (l === 6 && p1.collide(h4)){
  ph1 = ph1 - 1;
}
if (l === 8 && p1.collide(h5)){
  ph1 = ph1 - 1;
}
if (l === 8 && p1.collide(h6)){
  ph1 = ph1 - 1;
}

if (l === 3 && p2.collide(h1)){
  ph2 = ph2 - 1;
}
if (l === 5 && p2.collide(h2)){
  ph2 = ph2 - 1;
}
if (l === 6 && p2.collide(h3)){
  ph2 = ph2 - 1;
}
if (l === 6 && p2.collide(h4)){
  ph2 = ph2 - 1;
}
if (l === 8 && p2.collide(h5)){
  ph2 = ph2 - 1;
}
if (l === 8 && p2.collide(h6)){
  ph2 = ph2 - 1;
}
// Death dectection
if (gs === "maybe"){
  textSize(20);
  text("P1 LIVES: " + psm1, 500, 50);
  text("P2 LIVES: " + psm2, 500, 150);
if (p1.x > 800){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}
if (p1.x < 0){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}
if (p1.y > 750){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}

if (p2.x > 800){
  p2.y = 50;
  p2.x = p1.x;
  psm2 = psm2 - 1;
  die.play();
}
if (p2.x < 0){
  p2.y = 50;
  p2.x = p1.x;
  psm2 = psm2 - 1;
  die.play();
}
if (p2.y > 750){
  p2.y = 50;
  p2.x = p1.x;
  psm2 = psm2 - 1;
  die.play();
}
if (ph1 <= 0){
  ph1 = 500;
  p1.y = 50;
  p1.x = p1.x;
  psm1 = psm1 - 1;
  die.play();
}
if (ph2 <= 0){
  ph2 = 500;
  p2.y = 50;
  p2.x = p1.x;
  psm2 = psm2 - 1;
  die.play();
}
if (psm1 <= 0 && psm2 <= 0){
  textSize(50);
  text("DRAW!!!", 300, 400);
  if (frameCount % 200 === 0){
    l = Math.round(random(1,8));
    psm1 = 4;
    psm2 = 4;
    p1.x = 400;
    p2.x = 400;
    p1.y = 50;
    p2.y = 50;
  }
}else if (psm1 <= 0){
  textSize(50);
  text("P2 WINS!!!", 300, 400);
  if (frameCount % 200 === 0){
    l = Math.round(random(1,8));
    psm1 = 4;
    psm2 = 4;
    p1.x = 400;
    p2.x = 400;
    p1.y = 50;
    p2.y = 50;
  }
}else if (psm2 <= 0){
  textSize(50);
  text("P1 WINS!!!", 300, 400);
  if (frameCount % 200 === 0){
    l = Math.round(random(1,8));
    psm1 = 4;
    psm2 = 4;
    p1.x = 400;
    p2.x = 400;
    p1.y = 50;
    p2.y = 50;
  }
}
}

//1p Mode
if (gs === "auni"){
  textSize(12);
  text("P1 LIVES: " + psm1, 540, 50);
  text("COM LIVES: " + bm1, 530, 150);
if (p1.x > 800){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}
if (p1.x < 0){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}
if (p1.y > 750){
  p1.y = 50;
  p1.x = p2.x;
  psm1 = psm1 - 1;
  die.play();
}

if (b.x > 800){
  b.y = 50;
  b.x = p1.x;
  bm1 = bm1 - 1;
  die.play();
}
if (b.x < 0){
  b.y = 50;
  b.x = p1.x;
  bm1 = bm1 - 1;
  die.play();
}
if (b.y > 750){
  b.y = 50;
  b.x = p1.x;
  bm1 = bm1 - 1;
  die.play();
}
if (ph1 <= 0){
  ph1 = 500;
  p1.y = 50;
  p1.x = p1.x;
  psm1 = psm1 - 1;
  die.play();
}
if (bh <= 0){
  bh = 500;
  b.y = 50;
  b.x = p1.x;
  bm1 = bm1 - 1;
  die.play();
}
if (psm1 <= 0 && bm1 <= 0){
  textSize(50);
  text("DRAW!!!", 300, 400);
  if (frameCount % 200 === 0){
    cl = Math.round(random(1,3));
    psm1 = 4;
    bm1 = 4;
    p1.x = 400;
    b.x = 400;
    p1.y = 50;
    b.y = 50;
  }
}else if (psm1 <= 0){
  textSize(50);
  text("COMPUTER WINS!!!", 300, 400);
  if (frameCount % 200 === 0){
    cl = Math.round(random(1,3));
    psm1 = 4;
    bm1 = 4;
    p1.x = 400;
    b.x = 400;
    p1.y = 50;
    b.y = 50;
  }
}else if (bm1 <= 0){
  textSize(50);
  text("P1 WINS!!!", 300, 400);
  if (frameCount % 200 === 0){
    cl = Math.round(random(1,3));
    psm1 = 4;
    bm1 = 4;
    p1.x = 400;
    b.x = 400;
    p1.y = 50;
    b.y = 50;
  }
}
}


  /* This is for the levels */
  //Auni Levels
  if (cl === 1){
    cp1.visible = false;
    cp2.visible = false;
    cp3.visible = false;
    cp4.visible = false;
    cp5.visible = false;
    cb1.visible = false;
    cb2.visible = false;
    ch1.visible = false;

    cp1.visible = true;
    cp2.visible = true;
    p1.collide(cp1);
    p1.collide(cp2);
}
if (cl === 2){
  cp1.visible = false;
  cp2.visible = false;
  cp3.visible = false;
  cp4.visible = false;
  cp5.visible = false;
  cb1.visible = false;
  cb2.visible = false;
  ch1.visible = false;

  cp2.visible = true;
  cp3.visible = true;
  cb1.visible = true;
  p1.collide(cp3);
  p1.collide(cp4);
  p1.collide(cb1);
}
if (cl === 3){
  cp1.visible = false;
  cp2.visible = false;
  cp3.visible = false;
  cp4.visible = false;
  cp5.visible = false;
  cb1.visible = false;
  cb2.visible = false;
  ch1.visible = false;

  cp5.visible = true;
  cb2.visible = true;
  ch1.visible = true;
  p1.collide(cp5);
  p1.collide(cb2);
  p1.collide(ch1);
}

         //Change level
         if (keyWentDown("enter")){
           ph1 = 500;
           ph2 = 500;
          p1.x = 400;
          p1.y = 0;
          p2.x = 400;
          p2.y = 0;
          psm1 = 4;
          psm2 = 4;
        l = l + 1;
        if (l === 9){
          l = 1
        }
      }
      
        if (l === 1){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf1.visible = true;
            p1.collide(pf1);
            p2.collide(pf1);
        }
        if (l === 2){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf2.visible = true;
            bp1.visible = true;
            p1.collide(pf2);
            p1.collide(bp1);
            p2.collide(pf2);
            p2.collide(bp1);
        }
        if (l === 3){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf3.visible = true;
            h1.visible = true;
            p1.collide(pf3);
            p1.collide(h1);
            p2.collide(pf3);
            p2.collide(h1);
        }
        if (l === 4){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf4.visible = true;
            pf5.visible = true;
            bp2.visible = true;
            bp3.visible = true;
            p1.collide(pf4);
            p1.collide(pf5);
            p1.collide(bp2);
            p1.collide(bp3);
            p2.collide(pf4);
            p2.collide(pf5);
            p2.collide(bp2);
            p2.collide(bp3);
        }
        if (l === 5){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf6.visible = true;
            pf7.visible = true;
            h2.visible = true;
            p1.collide(pf6);
            p1.collide(pf7);
            p1.collide(h2);
            p2.collide(pf6);
            p2.collide(pf7);
            p2.collide(h2);
        }
        if (l === 6){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf8.visible = true;
            h3.visible = true;
            h4.visible = true;
            p1.collide(pf8);
            p1.collide(h3);
            p1.collide(h4);
            p2.collide(pf8);
            p2.collide(h3);
            p2.collide(h4);
        }
        if (l === 7){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            pf9.visible = true;
            pf0.visible = true;
            p1.collide(pf9);
            p1.collide(pf0);
            p2.collide(pf9);
            p2.collide(pf0);
        }
        if (l === 8){
            pf1.visible = false;
            pf2.visible = false;
            pf3.visible = false;
            pf4.visible = false;
            pf5.visible = false;
            pf6.visible = false;
            pf7.visible = false;
            pf8.visible = false;
            pf9.visible = false;
            pf0.visible = false;
        
            bp1.visible = false;
            bp2.visible = false;
            bp3.visible = false;
            bp4.visible = false;
            bp5.visible = false;
        
            h1.visible = false;
            h2.visible = false;
            h3.visible = false;
            h4.visible = false;
            h5.visible = false;
            h6.visible = false;
      
            bp4.visible = true;
            bp5.visible = true;
            h5.visible = true;
            h6.visible = true;
            p1.collide(bp4);
            p1.collide(bp5);
            p1.collide(h5);
            p1.collide(h6);
            p2.collide(bp4);
            p2.collide(bp5);
            p2.collide(h5);
            p2.collide(h6);
        }
  //Moving Ground pf8 - 0
  if (pf8.x > 500){
    pf8.velocityX = -4;
  }
  if (pf8.x < 300){
    pf8.velocityX = 4;
  }
  p1.depth = bp5.depth + 1;
  p2.depth = bp5.depth + 1;
  pp1.depth = bp5.depth + 2;
  pp2.depth = bp5.depth + 2;
  //DrawSprites
  drawSprites();
  //Basic Collision
  edges = createEdgeSprites();
  p1.collide(edges);
  p2.collide(edges);
  pf9.bounceOff(edges);
  pf0.bounceOff(edges);
  pf9.bounce(pf0);
  pf0.bounce(pf9);
}
