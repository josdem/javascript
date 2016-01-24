var inquirer = require('inquirer')
var guess = 8

var questions = [{
  type:'input',
  name:'number',
  message:'Think of a number between 1 and 10:'
}]

inquirer.prompt(questions, function(answers){
  var number = Number.parseInt(answers.number)
    if(number == guess){
      console.log('That is the number')
    } else {
      console.log('Try again')
    }
})

