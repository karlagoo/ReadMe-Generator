// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of Project: ",
        name: "title"
    },
    {
        type: "input",
        message: "Description: ",
        name: "description"
    },
    {
        type: "input",
        messages: "Installation process: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Application Usage: ",
        name: "usage"
    },
    {
        type: "list",
        message: "Which licence did you use: ",
        name: "license",
        choices: ["Mozilla", "IBM", "MIT"]
    },
    {
        type: "input",
        message: "Contributors: ",
        name: "contributors"
    },
    {
        type: "input",
        message: "Testings: ",
        name: "test"
    },
    {
        type: "input",
        message: "Questions",
        name:"questions"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log("The file has been created");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(answers);
           writeToFile('readme.md',generateMarkdown(answers))
        })
}

// Function call to initialize app
init();

