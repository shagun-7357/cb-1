
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(400,650,800,10)
    paper=new Paper(50,78,20,20)
	box1=new Dustbin(400,645,200,10 )
	box2=new Dustbin(305,600,10,100 )
	box3=new Dustbin(495,600,10,100 )



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-45})
	}
}

