// Base class for shapes
class Shape {
    constructor() {
      this.color = "";
    }
    setColor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
  //  TO DO create a method that renders a circle for your svg
    constructor() {
        super(color)
    }

    render() {

    }
  }
  
  class Triangle extends Shape {
   //  TO DO create a method that renders a triangle for your svg
   constructor() {
    super(color)
}

    render() {
        
    }
  }
  
  class Square extends Shape {
   //  TO DO create a method that renders a square for your svg 
   constructor() {
    super(color)
}

    render() {
        
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  