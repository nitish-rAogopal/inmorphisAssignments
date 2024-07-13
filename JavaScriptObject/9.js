// Write a JavaScript program to calculate the area and perimeter of a circle.
// Note : Create two methods to calculate the area and perimeter. The radius of the
// circle will be supplied by the user.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getPerimeter() {
        return (2 * Math.PI * this.radius).toFixed(4);
    }
    getArea() {
        return (Math.PI * (this.radius ** 2)).toFixed(4);
    }
}

const c = new Circle(5);

console.log(c.getPerimeter());
console.log(c.getArea());