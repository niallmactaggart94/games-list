# Unity Assessment Backend API

A REST API built for the Unity assessment.

## Modules used
This project uses the following modules:

- **Development:**
    - Uses Express as its framework for NodeJS, to handle all routing
- **Testing:** 
    - Unit tests are written in Jest, making use of node-mocks-http to mock the request and response, providing full coverage. 
    - Code styling is checked via eslint 
    - Integration tests - Uses supertest to run e2e integration testing which will test a number of scenarios detailed below.


## Using the API
To use the api you will firstly need to run the following commands
```
npm install
npm run start
```
This will start the application on port 2020. You will then be able to call this using Postman **(SSL Certificate Verification needs set to OFF)** or cURL.

Example:

#### GET
Below is how to call the GET API:

```
curl --location --request GET 'https://localhost:2020/gamesList' -vk
```


## Testing
The following commands can be run to test the application
```
Code stying - npm run test:lint
Unit testing - npm run test:unit
Integration testing - npm run test:integration
```
### Approach
The API will just return the games list, with an ID appended to it, this is purely for front end usage and could (maybe should) have been done there, however this
approach ensured that the same response would be returned to the client each time. The reason why the ID is appended is when the user clicks into the detailed view, 
it passes the ID through as a query param, so that if the user refreshes the page, or accesses the URL directly, it will pull the data, and then find the relevant ID

## Potential Improvements
- **CI/CD** - An improvement would be to add the project to a Gitlab project, which would run the relevant assurance steps
  as part of its pipeline i.e. Lint/Unit/Integration/Audit testing. This could then publish to AWS to be hosted.

- **Different approach** - This could have been done differently, either by hosting this within AWS, and making it serverless i.e. using API Gateway and Lambda, this would
  also give the option of scaling/authenticating via cognito. It could also have been made as a SwaggerJS project, which would have been beneficial if I had got round to adding 
  the POST method for adding a game, thus giving validation to the body being passed in to ensure that any game being added would have the correct fields
  
- **Additional APIs** - If I had more time, I would have liked to add in two more APIs. One GET, and one POST. The additional GET route would be to retrieve a game by Title,
  meaning you could remove the ID functionality mentioned above. The POST, as mentioned above, would be to add a new game to the JSON structure. I would have done this using 
  the module fs, which would re-write the file with the additional game appended
  
