class Dustbin{
    constructor(x,y,width,height,x,y,width,height,x,y,width,height,angle){
        var options={
            isStatic=true
        }
        this.body=Bodies.rectangle(x,y,width,height,x,y,width,height,x,y,width,height,options);
        this.width=width;
        this.height=height;
        world.add(world,this.body);
        
    }

}