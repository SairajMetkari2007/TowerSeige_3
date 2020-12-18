class Brick {
    constructor(x,y,width,height) {
      var options = {
          stiffness:0.8,
          friction:5.0,
          restitution:0.4,
      } 
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.Visibility = 25;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      if(this.body.speed<8){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      pop();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visibility = this.Visibility - 5;
      tint(25,this.Visibility);
      pop();
    }
  }
  
  score(){
    if(this.Visibility<0 && this.Visibility>-105){
      score++;
      console.log(score);
    }
  }  
};
