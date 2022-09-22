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
        choices: ["Manager", "Engineer","Intern"],
        name: "role",
        message:'What is your role?',
    }
])

}

Menu ()