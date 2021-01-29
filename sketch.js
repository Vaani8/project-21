var bulet, wall ;
var speed , weight ;

function setup() {
  createCanvas(1600,400);

  bulet=createSprite(100,200,40,7);
  bulet.shapeColor="white";
  bulet.velocityX=30;

 wall=createSprite(1050,200,60,height/2);
 wall.shapeColor="brown";
}

function draw() {
  background("blue");  
  if (isTouching(bulet,wall)){
    wall.shapeColor="orange"
    bulet.velocityX=0;
  }
  drawSprites();
}