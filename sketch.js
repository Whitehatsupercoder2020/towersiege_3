const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg="green"
function preload(){
  getBackgroundImg();
}
function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(390,300,250,10);
  stand2 = new Ground(700,200,200,10);
 
  
  box1 = new Box(300,275,30,40);
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
  
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  
  box16 = new Box(390,155,30,40);

  
  boxs1 = new Box(640,175,30,40);
  boxs2 = new Box(670,175,30,40);
  boxs3 = new Box(700,175,30,40);
  boxs4 = new Box(730,175,30,40);
  boxs5 = new Box(760,175,30,40);
 
  boxs6 = new Box(670,135,30,40);
  boxs7 = new Box(700,135,30,40);
  boxs8 = new Box(730,135,30,40);
 
  boxs9 = new Box(700,95,30,40);
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon);
  sling=new Slingshot(this.polygon,{x:100,y:200})
}

function draw() {
  background(bg); 
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  fill("green")
  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
  box7.display(); 
  fill("cyan")
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 
  fill("pink")
  box13.display(); 
  box14.display(); 
  box15.display(); 
  fill("blue")
  box16.display(); 
  boxs1.display(); 
  boxs2.display(); 
  boxs3.display(); 
  boxs4.display(); 
  boxs5.display(); 
  boxs6.display(); 
  boxs7.display(); 
  boxs8.display(); 
  boxs9.display(); 
  fill("Red")
  ellipse(this.polygon.position.x,this.polygon.position.y,40,40)
 // console.log(sling)
  sling.display();
 

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}
function keyPressed(){
  if (keyCode===32){
    sling.attach(this.polygon);
  }
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=06 && hour<=19){
      bg = "green";
  }
  else{
      bg = "black";
  }

  
}