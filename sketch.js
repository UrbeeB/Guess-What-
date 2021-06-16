var bg, bg2, bg3;
var security, quiz, system;
var logo1, logo2, logo3;
var logo1Img, logo2Img, logo3Img;
var score = 0;
var countdown = 15;
var wrongAns, rightAns, win;
var endText, endTextImg;
var scoreText, scoreImg;

function preload() {
 
  bg = loadImage("game.jpg");
  bg2 = loadImage("timeUp.jpg");
  bg3 = loadImage("end.jpg");
  logo1Img = loadImage("Camlin.jpg");
  logo2Img = loadImage("WhiteCub.jpg");
  logo3Img = loadImage("SabyaSachi.jpg");
  endTextImg = loadImage("endText.png");
  scoreImg = loadImage("score.png")

  wrongAns = loadSound('wrongAns.mp3');
  rightAns = loadSound('rightAns.mp3');
  win = loadSound('win.mp3');
}

function setup() {

  createCanvas(1500, 800);

  security = new Security();
  system = new System();
 
  logo1 = createSprite(750, 300);
  logo1.addImage(logo1Img);
  logo1.scale = 0.4;
}

function draw() {

  background(bg);

  security.display();

  fill("white")
  circle(1250, 95, 120);

  fill(0);
  textSize(50);
  text(countdown, 1237, 110);

  textSize(35);
  fill(0);
  stroke(0);
  strokeWeight(2);
  text("Score: " + score, 150, 78);

  if(frameCount % 40 == 0 && countdown > 0){
      countdown --;
  }
    
  if(score === 3){
     
    background(bg3);
    
    endText = createSprite(750, 400);
    endText.addImage(endTextImg);
    endText.scale = 0.5;

    scoreText = createSprite(750, 480);
    scoreText.addImage(scoreImg);
    scoreText.scale = 0.4;
  }

   drawSprites();
}
