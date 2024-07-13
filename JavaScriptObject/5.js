// Write a JavaScript program to get the volume of a Cylinder with four decimal
// places using object classes.
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.

class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        const pi = Math.PI;
        return parseFloat((pi * this.radius ** 2 * this.height).toFixed(4));
    }
}

const cylinder = new Cylinder(5, 10);
console.log(cylinder.getVolume());