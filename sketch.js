
function preload(){
  bgImg = loadImage("Background.jpg");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(bgImg); 
  bg.scale = 4.5;
  bg.velocityX = -5;
}

function draw() 
{
  background(30);
  if(bg.x<0){
    bg.x = bg.width/2;
  }
  drawSprites();

}




