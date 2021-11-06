//alias (shortform of the module name)
const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

let engine;
let world;
var angle = 45

function setup()
{
  createCanvas(400,400);
  rectMode(CENTER)
  ellipseMode(RADIUS)
  //first step is to create a engine
  engine = Engine.create()
  //create the world (myEngine.world)
  //alias
  world = engine.world
  //object notation
  var option = {
    restitution:1,
    density:20
  }
  //create Bodies (any shape) using the methods
  ball = Bodies.circle(300,50,10,option)
  ground = Bodies.rectangle(200,390,400,10,{isStatic:true})

  console.log(ball)
  //add the body to the world
  World.add(world,ball)
  World.add(world,ground)
  
  wedge = Bodies.rectangle(300,200,60,10,{isStatic:true})
  World.add(world,wedge)

}

function draw() 
{
  background(51);
  Engine.update(engine)

 // to rotate the matter body
  Matter.Body.rotate(wedge,angle)
  ellipse(ball.position.x,ball.position.y,10,10)
  rect(ground.position.x,ground.position.y,400,10)
  

  //push is to save settings 
  push ()
  //to translate the origin from (0,0) to the bodies x and y position
  translate ( wedge.position.x,wedge.position.y)
  // rotate body with an angle
  rotate(angle)
  //once translated the x and y position of rect we give as 0,0
  rect(0,0,60,10)
  pop ()
  //pop is to restore settings

  rect(30,40,100,10)

}

