const inquirer=require('inquirer');
const fs = require('fs');
const Employee = require("./classes/Employee.js");
const Engineer = require("./classes/Engineer.js");
const Intern = require("./classes/Intern.js");
const Manager = require("./classes/Manager.js");
const employeeBucket= [];

const init =() =>{
   return inquirer.prompt ([

   {
    type: input,

   },
   {
    type: input,

   },
   {
    type: input,

   }

   ]) .then(()=> {
        const manager = '';
        employeeBucket.push(manager);
   });

}