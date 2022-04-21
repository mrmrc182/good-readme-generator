const getMarkdown = ({license, email, project, installation, usage, contributors, test}) =>

`
# ${project}

## License
${license}

## Description

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
Questions?  You can contact me by email:\n
${email}
`

module.exports = getMarkdown;