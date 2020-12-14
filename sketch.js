
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,ground;
var dustbinpart1,dustbinpart2,dustbinpart3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperball= new Paperballs(100,150,2);
	ground = new Ground(600,200,1500,20);
	//dustbinpart1 = new Dustbin(1100,150,200,20);
	//dustbinpart2 = new Dustbin(1010,120,20,100);
	//dustbinpart3 = new Dustbin(1190,120,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  ground.display();
  //dustbinpart1.display();
  //dustbinpart2.display();
  //dustbinpart3.display();
  drawSprites();
 
}



