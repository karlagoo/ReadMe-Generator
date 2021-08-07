// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Mozilla':
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
    case 'IBM':
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
      break;
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    default:
      return "not correct";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents 📄	

* [Installation](## Installation)
* [Usage](## Usage)
* [Contributing] (## Contributing)
* [Tests] (## Test)
* [Questions] (## Questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributors}

## Tests
${data.test}

## Questions
If you have any additional questions, do not hesitate to reach out:

**GitHub: wwww.https://github.com/karlagoo**
**Email: karla_goo@yahoo.com**



`;
}

module.exports = generateMarkdown;
