class Ss {
    constructor(a,b){  
    var options={
        bodyA:a,
        bodyB:b,
        stiffness:0.04,
        length:50,
    }
    this.ss= Matter.Constraint.create(options)
    Matter.World.add(world,this.ss)
    }
    display(){
        var bodya=this.ss.bodyA.position
        var bodyb=this.ss.bodyB.position
        line(bodya.x,bodya.y,bodyb.x,bodyb.y)
    }
}