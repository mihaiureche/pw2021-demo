# Prerequisite

- git
- NodeJs 14.x
- npm 6.x

# Clone code

In order to start the application you will need to clone first the code using HTTP or SSH. 

# Start application

In order to start the application you will need to go to the root folder and run the following commands.

- `npm install`
- `npm run start`

Once you run this commands you will be able to access either directly the movies mfe using the following url `http://localhost:4200` or to access the shell app using the url provided above.

# Connect to the Movies API

In order to get results from the `themoviedb.org` you will need to get an API key which you should use it into the application. Follow the steps from the website https://developers.themoviedb.org/3/getting-started/introduction in order to get an API key.

Once you have the API key you will need to open the service file from the following location `/src/infrastructure/services/movie.service.ts` and put the API key into the `movieApiKey` property.