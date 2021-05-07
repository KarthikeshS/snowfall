const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var snow;
var background,backgroundImg;
var bg;
//var snows = [];
function preload(){
backgroundImg = loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world

  //snow = new Snow(400, 50);
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)

  if(frameCount %30 === 0){
    snow = new Snow(random(100,700),50)
    snow.display();
    //lifetime=100;
  }

 //snow.display();
  //createSnow(); 
  drawSprites();
}
/*function createSnow(){
  if(frameCount %30 === 0){
    snows.push(new Snow(random(100,700)))
    lifetime=100;
  }
  for (var i = 0; i<snows.length; i++){
    snows[i].display();
  }
}*/