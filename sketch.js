const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(900,250,70,70);
    box4 = new Box(800,250,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(850,300);
    pig2 = new Pig(850,250);
    log1 = new Log(850,280,300,PI/2);
    log2 = new Log(850,100,300,PI/2);
    bird1 = new Bird(100,250);
    box5 = new Box(850,50,70,70);
    log3 = new Log(800,50,150,PI/7);
    log4 = new Log(900,50,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    bird1.display();
    log3.display();
    log4.display();
    box5.display();
}