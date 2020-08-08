class Chain{
    constructor(bodyA,pointB){
    	var option={
    		bodyA: bodyA,
    		pointB: pointB,
    		lenght: 10

    	}
    	this.pointB=pointB;
    	this.chain=Constraint.create(option);
    	World.add(world,this.chain);




    }
    display(){
    	var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
         strokeWeight(4);
         line(pointA.x , pointA.y-30, pointB.x , pointB.y);
      


    }

}