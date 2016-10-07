"use strict"

class Polygon {

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.test = arguments[2];
        //this._name = 'Claus';
    }

    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }

    get area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Polygon(10, 10, 30);

console.log(square.area);
square.height = 300;
console.log(square.test);
square.name = 'hanibal';
console.log(square.name);
