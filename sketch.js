const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var block1,block2,block3,block4,block9,block8,block7,block6,block5;
var ground1,ground2;
var polygon,polygonImg;
var sling;
var backgroundImg
var gameState="onSling";
var score=0;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon=new Ball(200,200);   
   sling = new SlingShot(polygon.body,{x:170,y:200});

    stand1 = new Stand(865,240,260,5);
    stand2 = new Stand(600,350,260,5)

    block1 = new Brick(805,210,30,30);
    block2 = new Brick(835,210,30,30);
   
    block3 = new Brick(865,210,30,30);
    block4 = new Brick(895,210,30,30);
   
    block5 = new Brick(820,170,30,30);
    block6 = new Brick(850,170,30,30);
    block7 = new Brick(880,170,30,30);
    block8 = new Brick(910,170,30,30);
   
    block9 = new Brick(835,140,30,30);
    block10 = new Brick(865,140,30,30);
    block11 = new Brick(895,140,30,30);
   
    block12 = new Brick(850,100,30,30);
    block13 = new Brick(880,100,30,30);
   
    block14 = new Brick(865,50,30,30);
   
    block15 = new Brick(925,210,30,30); 
       
    block16 = new Brick(530,330,30,30);
    block17 = new Brick(560,330,30,30);
    block18 = new Brick(590,330,30,30);
    block19 = new Brick(620,330,30,30);
    block20 = new Brick(650,330,30,30);
       
    block21 = new Brick(540,250,30,30);
    block22 = new Brick(570,250,30,30);
    block23 = new Brick(600,250,30,30);
    block24 = new Brick(630,250,30,30);
    block25 = new Brick(555,200,30,30);
    block26 = new Brick(585,200,30,30);
    block27 = new Brick(615,200,30,30);
    
    block28 = new Brick(570,150,30,30);
    block29 = new Brick(600,150,30,30);
    
    block30 = new Brick(585,110,30,30); 
    
}

function draw(){

   background(0);
    Engine.update(engine);
    strokeWeight(4);

    textSize(35); 
       fill("white");
       text("score"+score,600,50);
    
    stand1.display();
    stand2.display();

    polygon.display();
    sling.display();
    fill("cyan");
    block1.display();
    block2.display(); 
    block3.display();
    block4.display();
    block15.display();
    
    fill("lightGreen");
    block5.display();
    block6.display();
    block7.display();
    block8.display(); 
    fill("pink");
    block9.display();
    block10.display();
    block11.display(); 
      
    fill("lightBlue");
    block12.display();
    block13.display();
     
    fill("purple");
    block14.display();
    
    fill("purple");
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
     
    fill("lightBlue");
    block21.display();
    block22.display();
    block23.display();
    block24.display();
      
    fill("pink");
    block25.display(); 
    block26.display();
    block27.display();
    fill("lightGreen");
    block28.display(); 
    block29.display();
     
    fill("cyan");
    block30.display();

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score(); 
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();
    block26.score();
    block27.score();
    block28.score();
    block29.score();
    block30.score();

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
sling  .fly();
}


function keyPressed(){
    if (keyCode===32){
       sling.attach(polygon.body);                                   
    }
}

