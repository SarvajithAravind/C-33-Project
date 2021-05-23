class Snow1{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 50,
            density: 50
        }
        this.x = x
        this.y = y
        this.r = r
        this.visibility = true
        this.body = Bodies.circle(this.x, this.y, (this.r-20)/2,options);
        this.image = loadImage("snow4.webp")
        World.add(world, this.body)
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y)
        imageMode(CENTER)
        image(this.image, 0, 0, this.r, this.y);;
        pop();
    }
}