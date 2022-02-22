// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');






// TODO: Create an array of messages for user input

const promptMessages = () => {
    return inquirer.prompt([
    {  
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {  
        type: "input",
        name: "description",
        message: "Provide a description of your project. What is the purpose of this project? What did you learn?"
    },
    {  
        type: "input",
        name: "installation",
        message: `What are the steps required to install your project?`
    },
    {  
        type: "input",
        name: "usage",
        message: "What are the instructions and examples for usage? Include screenshots and/or gifs in the following format--- ![alt text](screenshot.png)?"
    },
    {  
        type: "list",
        name: "license",
        choices:["ISC","MIT"],
        message: "What license do you want to include?"
    },
    {  
        type: "input",
        name: "githubName",
        message: "What is your github username?"
    },
    {  
        type: "input",
        name: "githubRepo",
        message: "What is the github repo for your project (assuming if the name is different from the title)?"
    },
    {  
        type: "input",
        name: "tests",
        message: "What tests do you want to run on your application? Provide examples on how to run them?"
    },
    {  
        type: "input",
        name: "eMail",
        message: "What is your e-mail for users to reach out to you if they have any questions about your project?"
    },
])

}


// TODO: Create a function to initialize app
function init() {
    promptMessages()
    .then((answers) => {
        const readMePageContent = generateMarkdown(answers);

        fs.writeFile('README.md', readMePageContent, err => {
            err ? console.log(err) : console.log("README.md successfully created")
        })
        
    })
}

// Function call to initialize app
init();
