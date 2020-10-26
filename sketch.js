const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var ballOption ={
  restitution:1

  }

  ball = Bodies.circle(200,100,50,ballOption);
  World.add(world,ball);

  var groundOption ={
    isStatic:true
  }

  ground = Bodies.rectangle(200,390,200,20,groundOption);
  World.add(world,ground);
  console.log(ground)


  
}

function draw() {
  background(0);  
  Engine.update(engine);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,50);
  

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  
  
}