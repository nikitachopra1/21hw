var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world
	groundObj = new Ground(width/2,670,width,60);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1300,600,20,120)
	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}
ball = Bodies.circle(400,590,30,ball_options)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display()
  leftSide.display()
  rightSide.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)
  drawSprites();

 
}

function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:20,y:-20})

	}
	
}

