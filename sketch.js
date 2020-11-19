
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var tree;
var boy,boy_img, stone
var rope;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9;

function preload()
{
boy_img=loadImage("boy.png")
	
}

function setup() {
var canvas=	createCanvas(1600, 800);

var boy = createSprite(200,690,30,100);
boy.addImage(boy_img);
boy.scale=0.15


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800,790,1600,20);
	tree = new Tree(1200,510,600,600);
	stone = new Stone(125,345,60,60);
	rope = new Rope(stone.body,{x:100, y:590});
	mango1 = new Mango(1200,382,80);
	mango2 = new Mango(1100,470,70);
	mango3 = new Mango(1200,300,90);
	mango4 = new Mango(1275,350,70);
	mango5 = new Mango(1400,520,80);
	mango6 = new Mango(1450,470,70);
	mango7 = new Mango(1125,356,70)
	mango8 = new Mango(1150,507,70)
	mango9 = new Mango(950,479,70)


	

	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
  	background(200);
   stone.display();
	tree.display();
	ground.display();
	 
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

	detectCollision(stone,mango1);
	detectCollision(stone,mango2);
	detectCollision(stone,mango3);
	detectCollision(stone,mango4);
	detectCollision(stone,mango5);
	detectCollision(stone,mango7);
	detectCollision(stone,mango6);
	detectCollision(stone,mango8);
	detectCollision(stone,mango9);
	



  drawSprites();
 
}


function mouseDragged(){
	
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
	


}


function mouseReleased(){
    rope.fly();
}

function keyPressed(){
	if(keyCode===32){
	rope.attach(stone.body);
	
	}

}

function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<-lmango.r+lstone.r){
Matter.body.setStatic(lmango.body,false);

}

}

