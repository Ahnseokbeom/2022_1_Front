class Person {
    constructor(s, i) {
        this.name = s;
        this.age = i;
    }
}
let person = new Person("홍길동", 16);
console.log(person);

class Rectangle {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    area() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(10, 15);
console.log(rectangle);
console.log(rectangle.area())