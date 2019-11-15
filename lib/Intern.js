const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, school, title = "Intern") {
        super(name, id, title)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;