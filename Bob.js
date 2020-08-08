class Bob{
    constructor(x,y){
        var option={
            isStatic:false,
            density:1,
            restitution:1.1,


        }
        this.body=Matter.Bodies.circle(x,y,60/2,option);
        this.color="red";
         World.add(world,this.body);
  
    }
    display(){
      var pos=this.body.position;
      push();
      translate(pos.x,pos.y)
      fill(this.color)
      rectMode(CENTER);
      
      ellipse(0,0,60);
      pop();

    }
}