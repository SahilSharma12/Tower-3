class Orangerect {
    constructor(x,y,width,height,angle){
      var options = {
        'restitution':0.8,
        'friction':0.8,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
      
      
      
      //super(x,y,20,height,angle);
      this.image = loadImage("orangerect.png");
      Matter.Body.setAngle(this.body, angle);
    }
    display(){
      if(this.body.speed<15){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(63,224,208);
        strokeWeight(1.5);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
    }else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visiblity);
        pop();
    }
    }
  }