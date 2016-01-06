/**
 * Created by mainadmin on 06.12.15.
 */

"use strict";

class Coordinat {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
}

class Figure{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
}

class Polygon extends Figure {
    constructor(x,y, coordinates){
        super(x,y);
        this.coordinates = coordinates;
    }

    get perimeter() {
        if (this.coordinates) {
            var p = 0;
            var i;
            for (i = 0; i < this.coordinates.length - 1; i++) {
                p += Math.sqrt(Math.pow(this.coordinates[i + 1].x - this.coordinates[i].x, 2)
                    + Math.pow(this.coordinates[i + 1].y - this.coordinates[i].y, 2));
            }
            p += Math.sqrt(Math.pow(this.coordinates[0].x - this.coordinates[i].x, 2)
                + Math.pow(this.coordinates[0].y - this.coordinates[i].y, 2));
            return p;
        } else {
            return null;
        }
    }

}

class Rectangle extends Polygon {

    constructor(x,y, width, height){
        super(x,y);
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width* this.height;
    }

    get perimeter() {
        return 2*(this.width +this.height);
    }
}

class Square extends Rectangle {

    constructor(x,y,width){
        super(x,y);
        this.width = width;
    }

    /**
     * Overwriting for more performance
     * @returns {number}
     */
    get perimeter() {
        return 4*this.width;
    }

    get area() {
        return this.width*this.width;
    }
}

/**
 * I extend this class from polygon, because Polygon is already has perimeter and Triangle is polygon :D
 */
class Triangle extends Polygon {

    constructor(x,y,coordinates) {
        super(x,y,coordinates);
        this.coordinates = coordinates;
        this.a = Math.sqrt(Math.pow(this.coordinates[1].x - this.coordinates[0].x, 2)
            + Math.pow(this.coordinates[1].y - this.coordinates[0].y, 2));
        this.b = Math.sqrt(Math.pow(this.coordinates[2].x - this.coordinates[1].x, 2)
            + Math.pow(this.coordinates[2].y - this.coordinates[1].y, 2));
        this.c = Math.sqrt(Math.pow(this.coordinates[0].x - this.coordinates[2].x, 2)
            + Math.pow(this.coordinates[0].y - this.coordinates[2].y, 2));
    }
    get area() {
        return Math.sqrt(this.perimeter*(this.perimeter-this.a)*(this.perimeter-this.b)*(this.perimeter-this.c));
    }
}

class Circle extends Figure {

    constructor(x,y, radius){
        super(x,y);
        this.radius = radius;
    }

    get perimeter() {
        return 2*Math.PI*this.radius;
    }

    get area() {
        return Math.PI*this.radius*this.radius;
    }
}

/**
 * Tests
 */

var square = new Square(1,1,2);
console.log("Square perimeter : "+square.perimeter);
console.log("Square area : "+square.area);
var rectangle = new Rectangle(1,1,2,6);
console.log("Rectangle perimeter : "+rectangle.perimeter);
console.log("Rectangle area : "+rectangle.area);
var triangle = new Triangle(0,0,[new Coordinat(0,0), new Coordinat(0,1), new Coordinat(1,0)]);
console.log("Rectangle perimeter : "+triangle.perimeter);
console.log("Rectangle area : "+triangle.area);
var circle = new Circle(1,1,4);
console.log("Circle perimeter : "+circle.perimeter);
console.log("Circle area : "+circle.area);


