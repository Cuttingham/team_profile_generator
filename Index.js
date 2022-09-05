const inquirer=require('inquirer');
const fs = require('fs');

const Employee = require("./classes/Employee.js");
const Engineer = require("./classes/Engineer.js");
const Intern = require("./classes/Intern.js");
const Manager = require("./classes/Manager.js");
const createTemplate=require('./template/createTemplate');

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

const addEmployee = () => {
console.log(`
Please add your employees to the team!
`);
return inquirer.prompt([
   {
       type: 'list',
       name: 'role',
       message: "Please choose your employee's role",
       choices: ['Engineer', 'Intern']
   },
   {
       type: 'input',
       name: 'name',
       message: "What's the name of the employee?", 
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
       message: "Please enter the employee's ID.",
       validate: nameInput => {
           if  (isNaN(nameInput)) {
               console.log ("Please enter a valid ID!")
               return false; 
           } else {
               return true;
           }
       }
   },
   {
       type: 'input',
       name: 'email',
       message: "Please enter the employee's email.",
       validate: email => {
           valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
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
       name: 'github',
       message: "Please enter the employee's github username.",
       when: (input) => input.role === "Engineer",
       validate: nameInput => {
           if (nameInput ) {
               return true;
           } else {
               console.log ("Please enter a valid Github username!")
           }
       }
   },
   {
       type: 'input',
       name: 'school',
       message: "Please enter the intern's school",
       when: (input) => input.role === "Intern",
       validate: nameInput => {
           if (nameInput) {
               return true;
           } else {
               console.log ("Please enter a valid school name!")
           }
       }
   },
   {
       type: 'confirm',
       name: 'confirmAddEmployee',
       message: 'Would you like to add more team members?',
       default: false
   }
])
.then(employeeData => {

   let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
   let employee; 

   if (role === "Engineer") {
       employee = new Engineer (name, id, email, github);

   } else if (role === "Intern") {
       employee = new Intern (name, id, email, school);
   }

   employeeBucket.push(employee); 

   if (confirmAddEmployee) {
       return addEmployee(employeeBucket); 
   } else {
       return employeeBucket;
   }
})
}

const writeFile = data => {
   fs.writeFile('./created_page/index.html', data, err => {
       // if there is an error 
       if (err) {
           console.log(err);
           return;
       // when the profile has been created 
       } else {
           console.log("Your team profile has been successfully created! Please check out the index.html")
       }
   })
}; 

managerQuestions()
.then(addEmployee)
.then(employeeBucket => {
return createTemplate(employeeBucket);
})
.then(data => {
   return writeFile(data);
})
.catch(err => {
   console.log(err);
});