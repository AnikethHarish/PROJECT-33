var backgroundImg,background;
var snow,snowImg;

function preload(){
    backgroundImg=loadImage("snow3.jpg");
    snowImg=loadImage("snow4.webp");
}
function setup() {
  createCanvas(800,400);
   
}
function draw() {
  background(backgroundImg); 
  snowFall();
  drawSprites();
}

  function snowFall(){
    if(frameCount%40===0){
      snow=createSprite(random(1,400),random(1,200),10,10);
   snow.scale=0.5;
   snow.addImage(snowImg);
   snow.velocityY=5;
   
  
    }
  }