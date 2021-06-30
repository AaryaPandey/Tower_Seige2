class Block{
    constructor(x, y, width, height) {
        var options = {
             restitution: 0.4,
                  
        }
        this.image = loadImage("block.png");
        this.Visibility = 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

      disappear(){
        if(this.body.speed < 3){
          display();
        }else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility - 5;
          tint(255, this.Visibility);
          image(this.image, this.body.position.x, this.body.position.y, 30, 40);
          pop();
        }
      }
      
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
        image(this.image, this.body.position.x, this.body.position.y, 30, 40);

      }
}
