const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, github, title = "Engineer") {
        super(name, id, title)
        this.github = github;
    }
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;