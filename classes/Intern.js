// importing Employee constructor 
const Employee = require('./Employee');

class Intern extends Employee  {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // returning school from input 
    getSchool () {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}

module.exports = Intern; 