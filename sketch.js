var snow,snowImage;
var walk,girlImg;
var snowfall,snowfallGroup;

function preload(){
snowImage= loadImage("snow1.jpg");
girlImg=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
snowfall= loadImage("snow4.webp");
snowfallGroup = new Group();
}

function setup() {
  createCanvas(1000,600);
snow=createSprite(500,370,50,50);
snow.addImage(snowImage);
snow.scale=2;
walk=createSprite(400, 450, 50, 50);
walk.addAnimation("girl",girlImg);


if (frameCount % 20 === 0){
  snowfall = createSprite(random(100, 1000), 0, 100, 100);
  snowfall.velocityY = 6;
}
snowfallGroup.add(snowfall);
}

function draw() {
  background(0);  





  drawSprites();
}