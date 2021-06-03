const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){
backgroundImage = loadImage("snow1.jpg")
}
function setup() {
  createCanvas(1280,619);
  engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
}

function draw() {
  background(backgroundImage);
  drawSprites();

  
  }

  if (frameCount %60 === 0) {
    particles.push(new snow(random(width/2-30, width/2+30),10,10));
  }
  
  for (var h = 0; h<snow.length; h++) {
    snow[h].display();
  }
