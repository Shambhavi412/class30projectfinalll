class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,385,900,17,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        strokeWeight(2);
        stroke("black")
        fill("purple");
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}