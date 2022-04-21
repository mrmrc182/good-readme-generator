const getMarkdown = ({description, license, email, github, project, installation, usage, contributors, test, licenseTitle}) =>

`
# ${project}

${license}

## Description
${description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Usage
${usage}

## Installation
${installation}

## Contribution
${contributors}

## Tests
${test}

## License:
${licenseTitle}

## Questions
Questions?  Contact Me:\n
Email: ${email}\n
GitHub: https://github.com/${github}
`

module.exports = getMarkdown;