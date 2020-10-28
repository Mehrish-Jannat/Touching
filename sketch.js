var fixedRect, movingRect;
var Square
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400,200,80,30);
  Square = createSprite(350,300,30,30);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (Touching(movingRect,Square)){
    movingRect.shapeColor = "red";
    Square.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    Square.shapeColor = "green";
    }
   
  drawSprites();
}
