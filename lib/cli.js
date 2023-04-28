
const fs = require('fs')
const { Circle, Triangle, Square } = require("./shapes");
const inquirer = require('inquirer')
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const selectShape = (shape) => {
    switch(shape){
        case 'circle':
            return new Circle()
        
        case 'triangle':
            return new Triangle()

        case 'square':
            return new Square()
    }
}

class CLI {
  run() {
    // TO DO using inquirier create prompts to help render your svg  
    return inquirer
    .prompt([
        {
            type: 'maxlength-input',
            name: 'title',
            message: 'Enter your SVG name (max 3 characters)',
            maxLength: 3

        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter color you want to use for your text(Either a distinct color name [ie "red"] or a hex value [ie "#d8d8d8"])'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'What shape do you want to use?',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter color you want to use for your shape(Either a distinct color name or a hex valuie)'
        },

    ])
    .then((data)=> {
        var {shape, shapeColor, textColor, title} = data;

        var newSVG = selectShape(shape)
        newSVG.setShapeColor(shapeColor)
        newSVG.setText(title)
        newSVG.setTextColor(textColor)

        var svgFileData = newSVG.render()

        fs.writeFile(`logo.svg`, svgFileData, (err)=>{
            console.log(err)
        })
    })

  }
  
   
     








  // TO DO using your inquirer data use fs to write your svg file
}

module.exports = CLI;
