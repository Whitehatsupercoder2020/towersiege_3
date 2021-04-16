class Slingshot {
    constructor(bodyA,pointB) {
      var options = {
         bodyA:bodyA,
         pointB:pointB,
         stiffness:0.04,
         length:10
      }
      
     this.slingshot=Constraint.create(options);
     this.pointB=pointB;
      World.add(world, this.slingshot);
    }
    display(){
        //console.log(this.slingshot.bodyA)
        if(this.slingshot.bodyA){
        var pointA=this.slingshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
}
fly(){
    this.slingshot.bodyA=null;
}
attach(body){
    this.slingshot.bodyA=body;
}
}