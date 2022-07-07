const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground, platform;
var box1, box2, box3, box4, box5;
var log1, log2, log3, log4, log5;
var pig1,pig2;
var bird, slingshot;
var backgroundImg;
var mute;
var reset;
var musica;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

    musica = loadSound("sprites/JoyMusic.mp3");
}

function setup(){
    canvas = createCanvas(1000,500);

    musica.play();
    //musica.setVolume(0.8);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,height,1000,20);
    platform = new Ground(150,height - 80,300,170);

    box1 = new Box(700,450,70,70);
    box2 = new Box(920,450,70,70);
    pig1 = new Pig(810, 420);
    log1 = new Log(810,400,300, PI/2);

    box3 = new Box(700,350,70,70);
    box4 = new Box(920,350,70,70);
    pig2 = new Pig(810, 330);
    log3 =  new Log(810,300,300, PI/2);

    box5 = new Box(810,250,70,70);
    log4 = new Log(750,250,150, PI/7);
    log5 = new Log(860,250,150, -PI/6);

    bird = new Bird(200,250);

    //criar o slingshot
    slingshot = new SlingShot(bird.body,{x:200, y:170});

    mute = createImg("sprites/mute.png");
    mute.position(930,30);
    mute.size(50,50);
    mute.mouseClicked(som);

    reset = createImg("sprites/menu_refresh.png");
    reset.position(870,30);
    reset.size(50,50)

    console.log(bird);
}

function draw(){
    background(backgroundImg);

    
    Engine.update(engine);

    ground.display();
    platform.display();

    box1.display();
    box2.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();

    //mostrar
    slingshot.display(); 


}

//puxar o sling
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}
 
//soltar o sling
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function som(){
   if(musica.isPlaying()){
    musica.stop();
   }
   else{
    musica.play();
   }
}
