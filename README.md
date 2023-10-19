# curaweb-bdd-cypress
______

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Important Notes:
- **This project is for Learning**
- Using cypress-bdd-cucumber to express Test Cases (or Test Scenarios) in Cucumber format using Gherkin language.

- ### Prerequisites
- [Cypress](https://www.cypress.io/) - [Installation and Setup](https://docs.cypress.io/guides/getting-started/installing-cypress)
- Internet access

### Setting Up
- [Check out](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) the code from this repository


## Test Features
Below is sample gherkin language that used for the Test Cases
### Story: As a user I want to login to CURA Healthcare Service
```Gherkin

Feature: Login to CURA Healthcare Service

  Scenario: As a user I want to login to CURA Healthcare Service
        Given the CURA Healthcare Service home page is displayed
        When user login with valid credential username '<username>' and password '<password>'
        Then dashboard page will be displayed

    Examples:
    |username|password|
    |John Doe|ThisIsNotAPassword|
      
```
