// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require ("./src/README-Template.js");
const { writeFile, copyFile } = require('./utils/generateMarkdown.js');

// const fs = require('fs');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    // Quesiton 1: Project_Title
    {
        type: 'input',
        name: 'Project_Title',
        message: 'What is your project title?',
        default: 'Project_Title'
    },
        // Quesiton 2: Project_Description
    {
        type: 'input',
        name: 'Project_Description',
        message: 'Please give a description for your project:',
        default: 'Project_Description'
    },
        // Quesiton 3: Instalation_Instructions
    {
        type: 'input',
        name: 'Instalation_Instructions',
        message: 'What are the instalation instructions for your project?',
        default: 'Instalation_Instructions'
    },
        // Quesiton 4: Usage_Information
    {
        type: 'input',
        name: 'Usage_Information',
        message: 'Provide information of how the user will use your applicaiton?',
        default: 'Usage_Information'
    },
        // Quesiton 5: Contribution_Guidelines
    {
        type: 'input',
        name: 'Contribution_Guidelines',
        message: 'What are the contribution guidelines for your project?',
        default: 'Contribution_Guidelines'
    },
        // Quesiton 6: Test_Instructions
    {
        type: 'input',
        name: 'Test_Instructions',
        message: 'Please provide test instructions for your project:',
        default: 'Test_Instructions'
    },
        // Quesiton 7: License_Badge
    {
        type: 'list',
        name: 'License_Badge',
        message: 'Please choose a license from the following list:',
        choices: ['Javascript', 'C++', 'Java', 'Python'],
        default: 'Javascript'
    },
        // Quesiton 8: GitHub_Username
    {
        type: 'input',
        name: 'GitHub_Username',
        message: 'What is your GitHub username?',
        default: 'GitHub_Username'
    },
        // Quesiton 9: Email_Address
    {
        type: 'input',
        name: 'Email_Address',
        message: 'What is your email addresss?',
        default: 'Email_Address'
    },
];

function callQuestions() {
    inquirer.prompt(questions)
    .then(res => generateReadMe(res))
    .then((answers) => {
        console.log(JSON.stringify(answers));

        writeToFile(JSON.stringify(answers));
        // writeToFile(answers);
    });
}

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("./README.md", data, err => {
        if (err) throw err;
    });

}

// TODO: Create a function to initialize app
function init() {
    callQuestions();

}

// Function call to initialize app
init();
