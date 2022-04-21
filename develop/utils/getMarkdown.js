const getMarkdown = ({description, license, email, github, project, installation, usage, contributors, test}) =>

`
# ${project}

## License
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

## Contributiors
${contributors}

## Testing
${test}

## Questions
Questions?  Contact Me:\n
Email: ${email}\n
GitHub: https://github.com/${github}
`

module.exports = getMarkdown;