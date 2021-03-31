var canvas;
var music;
var surface1, surface2, surface3, surface4;
var pin;
var topEdge, bottomEdge,leftEdge,rightEdge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(810,600);

//create 4 different surfaces
surface1 = createSprite(95,575,180,30);
surface1.shapeColor="red";

surface2 = createSprite(300,575,180,30);
surface2.shapeColor ="green";

surface3 = createSprite(505,575,180,30);
surface3.shapeColor = "yellow";

surface4 = createSprite(710,575,180,30);
surface4.shapeColor = "blue";


//sprtes for edges
topEdge = createSprite(400,5,815,10);
topEdge.visible=true;

rightEdge = createSprite(805,300,10,600);
rightEdge.visible=true;

leftEdge = createSprite(5,300,10,600);
leftEdge.visible=true;

bottomEdge = createSprite(400,595,810,10);
bottomEdge.visible=true;


//create box sprite and give velocity
pin = createSprite(Math.round(random(20,790)),300,50,50);
pin.shapeColor="white";
pin.velocityX=5;
pin.velocityY=5;
}

function draw() {
background("black");
    
//create edgeSprite
pin.bounceOff(rightEdge);
pin.bounceOff(topEdge);
pin.bounceOff(leftEdge);
pin.bounceOff(bottomEdge);

//stop the pin when it touches the surfaces and change its colour
if(pin.isTouching(surface1)){
    pin.shapeColor="red";
    pin.velocityX=0;
    pin.velocityY=0;
    //music.stop();
}

if(pin.isTouching(surface2)){
    pin.shapeColor="green";
    pin.bounceOff(surface2);
   
}

if(pin.isTouching(surface3)){
    pin.shapeColor="yellow";
    pin.bounceOff(surface3);
    music.play();  
}

if(pin.isTouching(surface4)){
    pin.shapeColor="blue";
    pin.bounceOff(surface4);
}

drawSprites();

}
