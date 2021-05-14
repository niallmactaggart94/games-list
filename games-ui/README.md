# Unity Assessment Frontend

Angular front end built for the Unity assessment.

## Overview
The front end has three routes:
- Home Page: Standard landing page when application is loaded
- Games List: Will give a small icon to each game returned by the backend, and a button which will enable the user to click through to a more detailed view.
  If the user wants to, they can filter the returned game by either game title, or by the console/platform they want.
- Games Detail: Will give a description and show other attributes to the game including price, categories and release date  

The application uses bootstrap, which helps with mobile design.

## Running the application
To start the application you will need to run
```
npm install
npm run start
```
This will start the application on port 4200. You will then be able to view this on your browser via http://localhost:4200.


## Testing
The following commands can be run to test the application. Unit tests are run in Jest, and the code styling is done using ESLint.
```
Code stying - npm run lint
Unit testing - npm run test
```

## Potential Improvements
If I had more time I would look to fix/improve the following:

- **CORS** - An issue I encountered was due to the application running on HTTP. This resulted in an issue with CORS as my backend runs on HTTPS, meaning I had to 
  ensure that CORS was enabled on the backend in order for them to talk to each other.

- **Add Game route** - Idea of specific users being able to have admin rights which would give them access to a route, which they would be able to add games to the list
  by filling out a simple form
  
- **Model** - Implement model to ensure the data coming back from the service will all be transformed correctly.

- **Accessibility** - Ensure that all accessibility testing is completed, using tooling such as AXE.