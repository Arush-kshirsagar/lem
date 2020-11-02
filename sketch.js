
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,g1,g2,g3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
     

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	g1=new Ground(500,500,200,20);
	g2=new Ground(490,500,20,100);
	g3=new Ground(510,500,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  g1.display();
  g2.display();
  g3.display();
  drawSprites();
 
}



