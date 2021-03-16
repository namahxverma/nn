const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dust1;
var gd;
function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(50, 50, 10, 20);
  dust1 = new dustbin(600, 620, 20, 200);
  gd = new ground(400, 690, 800, 20);
  
  //Create the Bodies Here.

  Engine.run(engine);
}

function draw() {
  
  background(0);
  rectMode(CENTER);

  paper.display();
  dust1.display();
  gd.display();
  

  drawSprites();
}
