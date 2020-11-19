class Mango{
constructor(x,y,radius)
{
    var opts={
isStatic : true,
restitution:0,
friction:1
}
this.body=Bodies.circle(x,y,radius,opts);

this.radius=radius;

this.image=loadImage("mango.png");

World.add(world,this.body)
}


display(){
push();
    var pos=this.body.position;
    imageMode(CENTER);
    image(this.image, pos.x, pos.y,80,80);

pop();
}












}