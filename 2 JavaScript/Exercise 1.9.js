Task 1

class Shape {
  constructor(names, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }

  name;
  sides;
  sideLength;

}

const square = new Shape("square", 4, 5);
square.calcPerimeter();

const triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter();
    


Task 2

class Shape {
  constructor(names, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calcPerimeter() {
    console.log(this.sides * this.sideLength);
  }

  name;
  sides;
  sideLength;

}


class Square extends Shape {
  constructor(sideLength) {
    super("square", 4, sideLength);
  }
}

const square = new Square(10);
square.calcPerimeter();
