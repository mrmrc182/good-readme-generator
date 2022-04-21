const inquirer = require("inquirer");
const fs = require("fs");
getMarkdown = require("./utils/getMarkdown");

const init = () => {
    inquirer
    .prompt([
        {
            name: "email",
            type: "input",
            message: "What is the best email for a user to reach you with questions?"
        },
        {
            name: "license",
            type: "list",
            message: "What license does your project use (Use the arrow keys and press Enter to select)?",
            choices: [
                {
                    name: "Apache",
                    value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
                },
                
            ]
        },
        {
            name: "project",
            type: "input",
            message: "What is the name of your project?"
        },
        {
            name: "installation",
            type: "input",
            message: "What should a user install to use your project?"
        },
        {
            name: "usage",
            type: "input",
            message: "How would a user use your project?"
        },
        {
            name: "contributors",
            type: "input",
            message: "Who has contributed to your project?"
        },
        {
            name: "test",
            type: "input",
            message: "How does a user test your app?"
        },
    ])
    .then((answers => {
        const markdownContent = getMarkdown(answers);
        fs.writeFile(`SampleREADME.md`, markdownContent, (err) =>
        err ? console.log("README Generation failed.") : console.log("README Created!")
        );
    }))
}

init()
