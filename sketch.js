var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 10, 50, 50);
  movingRect=createSprite(400,200,50, 50)
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixedRect.velocityY=5;
  movingRect.velocityY=-5;
}

function draw() {
  background(255,255,255);  
  bounceOff(movingRect,fixedRect);
drawSprites();
}
function bounceOff(obj1,obj2){
  if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&obj2.x-obj1.x<obj1.width/2+obj2.width/2){
    obj2.velocityX*=-1;
    obj1.velocityX*=-1;
  }
  if(obj1.y-obj2.y<obj1.height/2+obj2.height/2&&obj2.y-obj1.y<obj1.height/2+obj2.height/2)
  {
    obj2.velocityY*=-1;
    obj1.velocityY*=-1;
  }
}