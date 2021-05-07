class Snow{
    constructor(x, y,r) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':0.1
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.r = 30;
        this.image=loadImage("snow4.webp");
        this.image.scale=0.5;
        World.add(world, this.body);

      }
    
      display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
      }
}