// Base class for shapes
class Shape {
    constructor() {
      this.textColor = "";
      this.shapeColor = "";
      this.text = ""
    }

    setTextColor(textColor) {
      this.textColor = textColor;
    }

    setShapeColor(shapeColor) {
      this.shapeColor = shapeColor;
    }
    setText(text) {
      this.text = text;
    }
  }
  
  class Circle extends Shape {
  //  TO DO create a method that renders a circle for your svg
    constructor() {
        super()
    }

    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>
      `
    }
  }
  
  class Triangle extends Shape {
   //  TO DO create a method that renders a triangle for your svg
   constructor() {
    super()
}

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
      
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      
      </svg>
        `
    }
  }
  
  class Square extends Shape {
   //  TO DO create a method that renders a square for your svg 
    constructor() {
      super()
    }

    render() {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <rect x="90" y="40" width="120" height="120" fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>
    `
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  