# Unity Games Assessment 

This task was completed by Niall MacTaggart.

**IMPORTANT**: If there are any issues surrounding, you may need to trust the cert.pem file found in the backend service (games-backend/certs/cert.pem), for me this was adding it to keychain **in the certificates section**
and ensuring that it was trusted, both within Keychain and in my browser.

## Approach
This project structure is as follows:

- **Frontend:** Angular application
- **Backend:** Rest API written in NodeJS using the express framework

More details on decisions made, running each application individually and how to test them are found within the projects themselves.


## How to run solution locally

This can be done one of two ways, either by using Docker, or by running each service locally. More details on how to run the services are found within their own README file.
To run this via docker, run the following commands:
```
docker-compose build
docker-compose up
```