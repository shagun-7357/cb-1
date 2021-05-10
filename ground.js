class Ground{
  constructor(x,y,width,height){
    var ground_option={
        isStatic:true
      }
     this.ground = Bodies.rectangle(x,y,width,height,ground_option);
      World.add(world,this.ground);
      this.width=width
      this.height=height
  }
  display(){
    rectMode(CENTER);
    fill("brown")
    rect(this.ground.position.x,this.ground.position.y,this.width,this.height);
  }
}