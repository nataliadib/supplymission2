var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground, wall2;
var wall1aprite, wall2sprite, wall3sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	wall1sprite=createSprite(300, 610, 20, 100);
	wall2sprite=createSprite(400, 650, 200, 20);
	wall3sprite=createSprite(500, 610, 20, 100);
	wall1sprite.shapeColor = color(255, 0, 0);
	wall2sprite.shapeColor = color(255, 0, 0);
	wall3sprite.shapeColor = color(255, 0, 0);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	// Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	wall2 = Bodies.rectangle(400, 650, 200, 20, {restitution:0, isStatic:true} );
 	World.add(world, wall2);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
  drawSprites();
  if (keyDown(40)) {
	Body.setStatic(packageBody, false);
  }
}