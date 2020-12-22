var sun;
var planet1,planet2;
var Img1,Img2,sunImg,Img3;

function preload(){
  Img1 = loadImage("planet1.png");
  Img2 = loadImage("planet2.png");
  sunImg= loadImage("SUN.png");
  Img3 = loadImage("planet3.png");
}

function setup() {
  createCanvas(1300,600);

  sun=createSprite(650, 300, 50, 50);
  sun.shapeColor="yellow";
  sun.addImage("sun",sunImg);
  sun.scale=0.5;

  planet1 = createSprite(300,100,0,0);
  planet1.addImage("saturn",Img1);
  planet1.scale=0.9;
  planet1.setCollider("circle",0,0,30)

  planet2 = createSprite(1050,500,0,0);
  planet2.addImage("earth",Img2);
  planet2.scale=0.2;

  planet3 = createSprite(1050,100,0,0);
  planet3.addImage("saturn",Img3);
  planet3.scale=0.7;

}

function draw() {
  background("white");  
  imageMode(CENTER)

  if(frameCount%100===0){
     sun.scale=sun.scale+0.1;
  }

 /*  if(isTouching(sun,planet1)){
    planet1.destroy();
  }

  if(isTouching(sun,planet2)){
    planet2.destroy();
  } */

  if(sun.isTouching(planet1)){
    planet1.destroy();
  }

  if(sun.isTouching(planet2)){
    planet2.destroy();
  }

  if(sun.isTouching(planet3)){
    planet3.destroy();
  }
  drawSprites();
}

function isTouching (object1,object2){
  if(object2.y-object1.y<object2.height/2+object1.height/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.x-object2.x<object2.width/2+object1.width/2)
    {
      return true;
    }
    else{
      return false;
    }  
}