class Bob { 
    constructor(x,y,raduis) {
      var options = { 
        isStatic: true, 
        restitution:0.3, 
        friction:0.5,
         density:1.2 } 
         this.x= x;
          this.y= y; 
          this.raduis=raduis; 
         
          this.body = Bodies.circle(x,y,(this.raduis-20)/2,options);
       World.add(world,this.body); 
          } 
      display(){
      var pos =this.body.position;
      push()
      translate(pos.x, pos.y);
      rectMode(CENTER); 
      fill("pink");
      ellipse(0,0, this.raduis, this.raduis); 
      
      pop() 
       }
                 };