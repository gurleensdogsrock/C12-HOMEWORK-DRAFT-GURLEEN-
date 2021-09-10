var ball;
var ground;


let engine;
let world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
ground=new Ground(200,390,400,20);
}

function setup() {
	createCanvas(400,400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_option={
restitution:0.95
}
ball= Bodies.circle(200,100,20,ball_option);
	World.add(world,ball);
	Engine.run(engine);
    
	rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
 
}

function keyPresses(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		
	}
}







