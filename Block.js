class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
           // friction :0.0,
            density : 0.0004
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world, this.body);
      }
      display()
    {
        //console.log(this.body.speed)
        var pos = this.body.position;
        var angle = this.body.angle;
        
    if(this.body.speed<3)
    {
        //this.body.display();
        push();
    translate(pos.x,pos.y);
    rotate(angle);
    strokeWeight(2)
    stroke("black");
    //fill(this.color);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    
    }
     
    else
    {
      World.remove(world,this.body);

      push();
      this.Visibility = this.Visibility-5;
      tint(255,this.Visibility);
      pop();
    }
    }
    
    
    };
    
      /*display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }*/
