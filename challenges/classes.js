// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker
{
    constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume() {return this.length*this.width*this.height;}
    surfaceArea(){return 2*(this.length*this.width + this.width*this.height + this.length*this.height);}

}

var cuboid = new CuboidMaker(4,5,5);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker
{
    constructor(size)
    {
        super(size,size,size);
    }
    //we could just leave it there cuz a cube is just a cuboid with all even sides
    //but we are just gonna write the other formulas cuz they are sexy looking.
    volume(){return Math.pow(this.length,3)}
    surfaceArea(){return 6*Math.pow(this.length,2)}
}

var cube = new CubeMaker(4);
console.log(cube.volume()); // 64
console.log(cube.surfaceArea()); // 96