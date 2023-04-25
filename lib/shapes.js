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
        super(textColor, text, shapeColor)
    }

    render() {
      return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg height="100" width="100">
      <g>
      <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
      <text x="30" y="55" font-family="Verdana" font-size="20" fill=${this.textColor} >Heo</text>

      </g>
    </svg>
      `
    }
  }
  
  class Triangle extends Shape {
   //  TO DO create a method that renders a triangle for your svg
   constructor() {
    super(textColor, text, shapeColor)
}

    render() {
        return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
        <svg height="300" width="200" fill=${this.shapeColor} >
        <g>
         <polygon points="100,0 0,250 200,250" style="fill:lime;stroke:purple;stroke-width:1" />
         <text x="60" y="170" font-family="Verdana" font-size="40" fill=${this.textColor} >${this.text}</text>
         </g>
</svg>
        `
    }
  }
  
  class Square extends Shape {
   //  TO DO create a method that renders a square for your svg 
    constructor() {
      super(textColor, text, shapeColor)
    }

    render() {
      return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg width="400" height="400">
      <g>
       <rect width="300" height="300" fill=${this.shapeColor} />
       <text x="70" y="180" font-family="Verdana" font-size="100" fill=${this.textColor} >${this.text}</text>
      </g>
       Sorry, your browser does not support inline SVG.  
     </svg>
    `
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  