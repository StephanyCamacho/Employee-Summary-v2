const inquire = {
    defineEmployee: [
        {
            type: "list",
            message: "Role",
            name: "select",
            choices: ['Engineer', 'Intern', 'Complete']
        }
    ],
    employeeQuestions: [
        {
            type: "input",
            message: "Name",
            name: "name"
        },
        {
            type: 'input',
            message: 'ID Number',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Email',
            name: 'email',
        }

    ],
    managerQuestions: [
        {
            type: 'input',
            message: 'Office Number',
            name: 'officeNumber',
        }
    ],

    engineerQuestions: [
        {
            type: 'input',
            message: 'GitHub Username',
            name: 'githubUsername'
        }
    ],

    internQuestions: [
        {
            type: 'input',
            message: 'School',
            name: 'school'
        }
    ]
};

module.exports = inquire;