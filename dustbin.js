class Dustbin{
    constructor(x,y,width,height){
        var body_option = {
            restitution:0,
            isStatic:true
          }
          this.body=Bodies.rectangle(x,y,width,height,body_option);
          this.width=width
          this.height=height
          World.add(world,this.body);
    }
display(){
    push()
    translate(this.body.position.x,this.body.position.y) 
     rotate(this.body.angle) 
    rectMode(CENTER);
    fill("red")
    rect(0,0,this.width,this.height);
    pop()
}
}