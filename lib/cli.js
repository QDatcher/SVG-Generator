const inquirer = require('inquirer')

const { Circle, Triangle, Square } = require("./shapes");


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
            message: 'Enter color you want to use for your text(Either a distinct color name or a hex valuie)'
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

  }
  
   
     








  // TO DO using your inquirer data use fs to write your svg file
}

module.exports = CLI;