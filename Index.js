const inquirer=require('inquirer');
const fs = require('fs');

const Employee = require("./classes/Employee.js");
const Engineer = require("./classes/Engineer.js");
const Intern = require("./classes/Intern.js");
const Manager = require("./classes/Manager.js");
const htmlTemplate=require('./template/html');

const employeeBucket= [];

const managerQuestions =() =>{
   return inquirer.prompt ([
       {
           type: 'input',
           name: 'name',
           message: 'Who is the manager of this team?', 
           validate: nameInput => {
               if (nameInput) {
                   return true;
               } else {
                   console.log ("Please enter a valid name!");
                   return false; 
               }
           }
       },
       {
           type: 'input',
           name: 'id',
           message: "Please enter the manager's ID.",
           validate: nameInput => {
               if  (isNaN(nameInput)) {
                   console.log ("Please enter a valid ID(must be a number!)")
                   return false; 
               } else {
                   return true;
               }
           }
       },
       {
           type: 'input',
           name: 'email',
           message: "Please enter the manager's email.",
           validate: email => {
               valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
               //regular expression to validate email found on w3resource
               if (valid) {
                   return true;
               } else {
                   console.log ('Please enter a valid email!')
                   return false; 
               }
           }
       },
       {
           type: 'input',
           name: 'officeNumber',
           message: "Please enter the manager's office number",
           validate: nameInput => {
               if  (isNaN(nameInput)) {
                   console.log ('Please enter a valid number!')
                   return false; 
               } else {
                   return true;
               }
           }
       }
   ])
   .then(managerInput => {
       const  { name, id, email, officeNumber } = managerInput; 
       const manager = new Manager (name, id, email, officeNumber);
       employeeBucket.push(manager); 
   })
};

