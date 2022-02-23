function generateMarkdown({title, description, installation, usage, license, githubName, githubRepo, tests, eMail}) {
    return`
# ${title}
    
    
## Description
    
${description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribute](#contribute)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
    
${installation}
    
 ## Usage
    
${usage}
    
## License 
[![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)](https://opensource.org/licenses/${license})
    
    
The license included for this project is under ${license}
    
    
## Contribute 
[![Contribution: Suggestions](https://img.shields.io/badge/Contribution%20-Suggestions-4baaaa.svg)](https://github.com/${githubName}/${githubRepo}/issues)
    
Please click on the badge to report any issues if they exist
    
    
## Tests
    
${tests}
    

## Questions
    
Contact me: 

- [Github Profile](https://github.com/${githubName}) 
- [E-mail](mailto:${eMail})`
    
    
};
    
    
    
module.exports = generateMarkdown;
    