/**
 * Created by mainadmin on 06.12.15.
 */


function test(func) {
    func();
}

test(() => console.log("hi"));

/*
class Figure{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Polygon extends Figure {
    constructor(x,y, coordinates){
        super.constructor(x,y);
        this.coordinates = coordinates;
    }

    get perimeter() {
        var p = 0;
        var i;
        for (i = 0; i < this.coordinates.length-1; i++) {
            p += Math.sqrt(Math.pow(this.coordinates[i+1].x - this.coordinates[i].x, 2)
                + Math.pow(this.coordinates[i+1].y - this.coordinates[i].y, 2));
        }
        p += Math.sqrt(Math.pow(this.coordinates[0].x - this.coordinates[i].x, 2)
            + Math.pow(this.coordinates[0].y - this.coordinates[i].y, 2));
        return p;
    }

}

class Rectangle extends Polygon {

    constructor(x,y, width, height){
        super.constructor(x,y);
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width* this.height;
    }
}

class Square extends Rectangle {

    constructor(x,y,width){
        super.constructor(x,y);
        this.width = width;
    }

    /!**
     * Overwriting for more performance
     * @returns {number}
     *!/
    get perimeter() {
        return 4*this.width;
    }

    get area() {
        return this.width*this.width;
    }
}

class Triangle extends Figure {

    var p = perimeter(),
        a = Math.sqrt(Math.pow(this.coordinates[1].x - this.coordinates[0].x, 2)
            + Math.pow(this.coordinates[1].y - this.coordinates[0].y, 2))
        b =Math.sqrt(Math.pow(this.coordinates[2].x - this.coordinates[1].x, 2)
            + Math.pow(this.coordinates[2].y - this.coordinates[1].y, 2)),
        c = Math.sqrt(Math.pow(this.coordinates[0].x - this.coordinates[2].x, 2)
            + Math.pow(this.coordinates[0].y - this.coordinates[2].y, 2));
    get area() {
        return Math.sqrt(p*(p-a)*(p-b)*(p-c));
    }
}

class Circle extends Figure {

    constructor(x,y, radius){
        super.constructor(x,y);
        this.radius = radius;
    }

    /!**
     * Overwriting for more performance
     * @returns {number}
     *!/
    get perimeter() {
        return 2*Math.PI*this.radius;
    }

    get area() {
        return Math.PI*this.radius*this.radius;
    }
}

*/
