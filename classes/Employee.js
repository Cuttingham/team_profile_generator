// employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }
    // returning name from input
    getName () {
        return this.name;
    }
    // returning id from input
    getId () {
        return this.id;
    }   
    // returning email from input
    getEmail () {
        return this.email;
    }
    getRole () {
        return 'Employee'; 
    }
};

module.exports = Employee; 