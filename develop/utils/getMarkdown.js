const getMarkdown = ({description, license, email, github, project, installation, usage, contributors, test}) =>

`
# ${project}

${license}

## Description
${description}

## Table of Contents
- [Usage](#usage)
- [Installation](#installation)
- [Contributors](#contributors)
- [Testing](#testing)
- [Questions](#questions)

## Usage
${usage}

## Installation
${installation}

## Contributors
${contributors}

## Testing
${test}

## License:
// this is what i need assistance with.

## Questions
Questions?  Contact Me:\n
Email: ${email}\n
GitHub: https://github.com/${github}
`

module.exports = getMarkdown;