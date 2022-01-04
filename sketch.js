const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
angle=45
var options = {
  isStatic: true
}

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  cannon = new Cannon(170, 150, 100, 170, angle )
  

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

}

function draw() {
  background("blue")
  imageMode(CENTER)
  image(backgroundImg,600,300,1200,600)
  Engine.update(engine);

  cannon.display()
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
}
