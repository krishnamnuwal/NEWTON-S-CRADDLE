const Body=Matter.Body;
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//const Body=Matter.Body
const Constraint=Matter.Constraint;

var bob,bob2,bob3,bob4,bob5,roof,chain,chain2,chain3,chain4,chain5;

function setup(){
createCanvas(1000,800);

//engine=Engine.create();
//world =engine.world;
engine = Engine.create();
world = engine.world;

bob = new Bob(270,500);
bob2= new Bob(333,500);
bob3=new Bob(396,500);
bob4=new Bob(459,500);
bob5=new Bob(522,500);
roof=new Roof(400,150,350,30);



chain= new Chain(bob.body,{x:270,y:150});
chain2=new Chain(bob2.body,{x:333,y:150});
chain3=new Chain(bob3.body,{x:396,y:150});
chain4=new Chain(bob4.body,{x:459,y:150});
chain5=new Chain(bob5.body,{x:522,y:150});







}

function draw(){
background(220);
Engine.update(engine);
bob.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
roof.display();
chain.display();
chain2.display();
chain3.display();
chain4.display();
chain5.display();
fill("red");
textSize(20);
textFont("Arial Black")
text("KEY TO PRESS",330,600);
text("1.UP",330,630);
text("2.DOWN",330,660);
text("3.LEFT",330,690);
textSize(28);
text("NEWTON'S CRADDLE",250,100);
}


function keyPressed() {
    if (keyCode === UP_ARROW) {

      //Matter.Body.setStatic(bob.body,false);
      Matter.Body.applyForce(bob.body,bob.body.position,{x:-220,y:220});
      
  }

      if (keyCode === DOWN_ARROW) {

     // Matter.Body.setStatic(bob.body,false);
      Matter.Body.applyForce(bob.body,bob.body.position,{x:-220,y:220});
      Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-220,y:220});
  
    }

    if(keyCode=== LEFT_ARROW){
        Matter.Body.applyForce(bob.body,bob.body.position,{x:-220,y:220});
        Matter.Body.applyForce(bob2.body,bob2.body.position,{x:-220,y:220});
         Matter.Body.applyForce(bob4.body,bob4.body.position,{x:215,y:-215});
        Matter.Body.applyForce(bob5.body,bob5.body.position,{x:215,y:-215});
        Matter.Body.setStatic(bob3.body,true);

    }
  
    
}
