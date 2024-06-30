## Table of contents
* [ProjectName](#project-Name)
* [ProjectDescription](#project-description)
* [Requirements](#requirements)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Collaboration](#collaboriation)
* [License]{#license}
* [Project status](#Project-status)

# project-name
Gaminatorium

# project-description
* The Gaminatorium website allows users to browse and access various games. The website features graphics that display the available games, which can be sorted and filtered based on preferences such as single or multiplayer games. Users can also add games to their favourites, which will place them at the top of the list.

* On the right-hand side of the website, there is a section that shows newly-started multiplayer games, continually updating without the need to refresh the page.

* Clicking on a game icon opens a pop-up window with information about the game, including details about the author, date added, technologies used, and a link to the game's GitHub repository. There is also a "Play" button that opens a new window leading directly to the game's website. However, if a user is not registered, clicking on "Play" will redirect them to the login or registration screen.

* Once a user activates their account, they are presented with a personalised panel containing personalisation options. Users also have the option to add their own games, which takes them to a relevant form and provides instructions on how to use the Gaminatorium API.

# requirements 

## npm  -v
* 10.8.0

## yarn -v
* 1.22.22

# technologies 

## Backend
* Lang Java v 21 (framework SpringBot 3.2.5)
* Builder/Manager (Gradle)
* Drafting (Git + GitHub)
* DataBase (Postgres SQL + LiquidBase)
* ORM (Hibernate)
* Testing ( JUint/AssertJ + Mockito)
* Authorisation (KeyCloak)
* Containerisation (Docker + Docekr Compose)
* Message Broker (RabbitMQ)
* Ci/CD (Jenkins)

## Frontend (typeScript + react + TailWindCSS + CSS3)

# instalation
 * To run the program locally, install npm and yarn in the LTS version and then type the command in the terminal npm run dev or yarn run dev

# Usage 

## Examples of using TypeScript in React

* TypeScript is a JavaScript language overlay that adds static typing. This allows you to detect errors in your code at an earlier stage, improving the quality and reliability of your   application.

* Available scripts in TypeScript React

* The react-scripts package contains several useful scripts that can be used when working with React applications written in TypeScript:

* start: Starts the application in development mode.
* build: Builds the application for production.
* test: Runs unit tests.
* eject: Extracts the React application configuration from the react-scripts package.

# testing 

## Jnuit 
* Create a test class: Create a test class that extends the TestCase class from the JUnit library.
Write test methods: Write test methods that validate individual methods or classes. Test methods should start with the word test.
Run tests: Run the tests using a test runner tool such as Maven or Gradle.

## Asserts 

* How to run assert tests:
* Import the Assert class: Import the Assert class from the JUnit library.
* Use assert methods: Use assert methods such as assertEquals(), assertTrue(), assertFalse() to check conditions in your tests.

## Mockito
* How to run tests using Mockito:

* Add the Mockito library to your project: Add the Mockito library to your project using a dependency management tool such as Maven or Gradle.
* Create a dummy object: Create a dummy object using the mock() method from the Mockito library.
* Configure a dummy object: Configure a dummy object to specify how it should behave during testing. You can use methods such as when() and thenReturn().
* Use a dummy object in tests: Use a dummy object in your tests to validate your code.

# Collaboration 
* You are welcome to commit and collaborate with us, as we are an open source project

# License 
* MIT License 


 # project-status
 * Work in progress 
