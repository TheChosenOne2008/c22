const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(800,400);
 engine= Engine.create();
  world= engine.world
  
  var ball_options={
restitution: 0.8
  }
  
ball= Bodies.circle(400,200,40,ball_options)
World.add(world, ball);
console.log(ball);

var ground_options={
isStatic: true
}

ground= Bodies.rectangle(400,380,800,10,ground_options);
  World.add(world,ground);
}

function draw() {
  background("aquamarine");
  Engine.update(engine);  
 ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,40,40);

  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,50);

} 