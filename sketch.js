const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var BgImage
var Bg
var snow1
var boy

function preload(){
  BgImage = loadImage("snow1.jpg")
  boy = loadAnimation("Image1.png", "Image2.png", "Image3.png", "Image4.png", "Image5.png", "Image6.png",
  "Image7.png", "Image8.png", "Image9.png", "Image10.png")
}

function setup() {
  createCanvas(620,400);
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(300,400,1400,5)
  ground.visibility = false
  boy1 = createSprite(300,299)
  boy1.addAnimation("jumping", boy);
  boy.scale = 0.1;

  snow1 = new Snow1(40,20,40)
  snow2 = new Snow1(135,20,40)
  snow3 = new Snow1(256,20,40)
  snow4 = new Snow1(400,20,40)
  snow5 = new Snow1(498,20,40)
  snow6 = new Snow1(450,20,40)

  snow7 = new Snow2(80,20,40)
  snow8 = new Snow2(177,20,40)
  snow9 = new Snow2(310,20,40)
  snow10 = new Snow2(350,20,40)
  snow11 = new Snow2(500,20,40)
  snow12 = new Snow2(609,20,40)

  Engine.run(engine);

}

function draw() {
  background(BgImage);
  
  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();

  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();

  

  
  ground.display();

 

  drawSprites();
}