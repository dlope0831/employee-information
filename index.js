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
        type:'list',
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
      displayManager (response);
      break;
    case 'Engineer':
      displayEngineer (response)
      break;
    case 'Intern':
      displayIntern (response);
      break;
    case 'Exit':
      break;
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
};

const displayEngineer = (info) => {
  inquirer
  .prompt ([
  {
      type:'input',
      name: 'gitHub',
      message: 'What is your GitHub username?',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter your GitHub username!');
            return false;
          }
        }
  }
])
.then (answer => {
  var newEngineer = new Engineer (info.name, info.id, info.email, answer.gitHub)
  employeeArr.push(newEngineer)
  console.log(employeeArr);
  generateHtml();
})
};
const displayIntern = (info) => {
  inquirer
  .prompt ([
  {
      type:'input',
      name: 'school',
      message: 'What is your school?',
      validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter your school!');
            return false;
          }
        }
  }
])
.then (answer => {
  var newIntern = new Intern (info.name, info.id, info.email, answer.school)
  employeeArr.push(newIntern)
  console.log(employeeArr);
  generateHtml();
})
};

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
  
}
})
}

Menu ()