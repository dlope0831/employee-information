const Intern = require('./Intern');

class Intern extends Employee {
    constructor(name, school) {
        super(name);
        this.school = school;
    }
    getSchool() {
        
    }
    getRole() {

    }
}

module.exports = Intern;