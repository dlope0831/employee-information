const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

let employeeArr = [];

function Menu () {

    inquirer
    .prompt ([
    {
        type:'input',
        name: 'name',
        message: 'What is your name?',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter your name!');
              return false;
            }
          }
    },
    {
        type:'input',
        name: 'id',
        message: 'What is your id?',
        validate: idInput => {
            if (idInput) {
              return true;
            } else {
              console.log('You need to enter your Id!');
              return false;
            }
          }
    },
    {
        type:'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('You need to enter your email!');
              return false;
            }
          }
    },
    {
        type:'checkbox',
        name: "role",
        message:'What is your role?',
        choices: [
          "Manager", 
          "Engineer",
          "Intern",
        ],   
    }
])
.then (response => {
  switch (response.role) {
    case "Manager":
      console.log('check')
      displayManager (response);
      break;
    // case 'Engineer':
    //   displayEngineer (response)
    //   break;
    default: console.log('check default')
  }
})
};

const displayManager = (info) => {
  inquirer
  .prompt ([
  {
      type:'input',
      name: 'officeNumber',
      message: 'What is your office number?',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter your office number!');
            return false;
          }
        }
  }
])
.then (answer => {
  var newManager = new Manager (info.name, info.id, info.email, answer.officeNumber)
  employeeArr.push(newManager)
  console.log(employeeArr);
  generateHtml();
})
}

const generateHtml = () => {
  inquirer
  .prompt ([
  {
      type:'confirm',
      name: 'addEmployee',
      message: 'Do you want to add a new employee?',
  }
])
.then (answer => {
if (answer.addEmployee === true) {
  Menu()
} else {
console.log('End Program')
}
})
}
Menu ()