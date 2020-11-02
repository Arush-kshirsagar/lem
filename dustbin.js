class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic=true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        world.add(world,this.body);
        
    }

}