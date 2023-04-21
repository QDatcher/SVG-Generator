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
      return `<rect x="90" y="40" width="120" height="120" fill=${this.color} />`
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  