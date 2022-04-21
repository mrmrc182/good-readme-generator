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
            name: "github",
            type: "input",
            message: "What is your github username?"
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
                {
                    name: "Boost",
                    value: "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
                },
                {
                    name: "BSD",
                    value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                },
                {
                    name: "Creative Commons",
                    value: "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)",
                },
                {
                    name: "Eclipse",
                    value: "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
                },
                {
                    name: "GNU",
                    value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                },
                {
                    name: "IBM",
                    value: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
                },
                {
                    name: "ISC",
                    value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },
                {
                    name: "MIT",
                    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },
                {
                    name: "Mozilla",
                    value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
                },
                {
                    name: "Open Data Commons",
                    value: "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)",
                },
                {
                    name: "Perl",
                    value: "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)",
                },
                {
                    name: "SIL",
                    value: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
                },
                {
                    name: "Unilicense",
                    value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
                },
                {
                    name: "Zlib",
                    value: "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
                },
            ]
        },
        {
            name: "description",
            type: "input",
            message: "How would you describe this project to a 5 year old?"
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
