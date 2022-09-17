const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, gitHub) {
        super(name);
        this.gitHub = gitHub;
    }
    getGitHub() {

    }
    getRole () {
        
    }
}

module.exports = Engineer;
