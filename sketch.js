
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;
var s1 , s2 , s3 , s4 ;
var box1 , box2 , box3 , box4 , box5 , box6 , box7 , box8 , box9 , box10 , box11 , box12  , box13 , box14 , box15 , box16;
var box16 , box17 , box18 , box19 , box20 , box21 , box22 , box23 , box24 , box25 , box26 , box27 , box28 , box29 , box30;
var shooter , slingShot ;
function preload()
{
shooterImg = loadImage("polygon.png")	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
s1 =  new Stands(290 , 700 , 200 , 5)
s2 =  new Stands(700 , 600 , 200 , 5)
s3 =  new Stands(1200 , 700 , 200 , 5)
s4 =  new Stands(1000 , 260 , 200 , 5)

box1 = new Box(290 , 690 , 30 ,50)
box2 = new Box(230 , 690 , 30 ,50)
box3 = new Box(350 , 690 , 30 ,50)
box4 = new Box(260 , 660 , 50 ,30)
box5 = new Box(290 , 599 , 50 ,30)
box6 = new Box(320 , 660, 50 ,30)
box7 = new Box(290 , 579 , 10 ,50)

box8 = new Box(640 , 590 , 30 ,50)
box9 = new Box(760 , 590 , 30 ,50)
box10 = new Box(700 , 590 , 30 ,50)
box11 = new Box(670 , 530 , 50 ,30)
box12 = new Box(730 , 530 , 50 ,30)
box13 = new Box(700 , 495 , 50 ,30)
box14 = new Box(702 , 455 , 10 ,50)

box15 = new Box(1200 , 690 , 30 , 50)
box16 = new Box(1250 , 690 , 30 , 50)
box17 = new Box(1150 , 690 , 30 , 50)
box18 = new Box(1230 , 645 , 50 , 30)
box19 = new Box(1170 , 645 , 50 , 30)
box20 = new Box(1200 , 630 , 30 , 50)
box21 = new Box(1250 , 600 , 30 , 50)
box22 = new Box(1150 , 600 , 30 , 50)
box23 = new Box(1200 , 600 , 30 , 50)

box24 = new Box(1000 , 255 , 30 , 50)
box25 = new Box(1050 , 255 , 30 , 50)
box26 = new Box(950 , 255 , 30 , 50)
box27 = new Box(1000 , 200 , 30 , 50)
box28 = new Box(1050 , 200 , 30 , 50)
box29 = new Box(950 , 200 , 30 , 50)
box30 = new Box(1000 , 180 , 50 , 30)

shooter = Bodies . circle(50 , 200 ,50)

slingShot = new SlingShot(shooter.body,{x:200 , y:100});
World.add(world,shooter);

Engine.run(engine);
  
}


function draw() {
  background(0);

  imageMode(CENTER);
  image( shooterImg , shooter.position.x , shooter.position.y , 40, 40)
  
  s1.display();
  s2.display();
  s3.display();
  s4.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  
  slingShot.display();
      drawSprites();
 
}


function mouseDragged(){
 // Matter.Body.setPosition(shooter.body,{x:mouseX , y:mouseY})
  }
  
  function mouseReleased(){
  //slingShot.fly();
  
  
  }
