var paper,bucket1,bucket2,bucket3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
paper = circle(85,650,20);
bucket1 = createSprite(600,650,150,10);
bucket2 = createSprite(450,625,10,50);
bucket3 = createSprite(700,625,10,50);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyWentUp("space")){
paper.velocityX = 50;
paper.velocityY = -37;
}
if(keyWentDown("space")){
	paper.velocityX = 50;
	paper.velocityY = 37;
}
  drawSprites();
 
}



