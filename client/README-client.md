### Reactjs UI Project

UI for displaying data in tabel and export inot pdf and excel

### Prerequisites

node v10.15.1\
npm 6.4.1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

To install packages required for this project

### `npm run json:server`

Runs json server to create fake api.
**Note: Rerun the server, incase json file is deleted (for testing purpose)**

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:e2e`

Launches the test runner in the interactive watch mode with headless browser.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run test:coverage`

This will give test coverage resport
See the section about [Coverage Reporting](https://create-react-app.dev/docs/running-tests#coverage-reporting) for more information

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run prettier`

Format all the files under js and jsx file under src with prettierrc rules

### `npm run lint`

You can check eslint errors and warning before committing the code by running above command.

### EndPoints

**code**\

- 'GET' Endpoint - To get the data /data

## Docker, Nginx & Aurora

Company adopted Docker as a solution for containerization. The team configured the infrastructure to let developers publish their services wrapped in Docker containers to an internal Artifactory registry and then deploy them to Aurora.
The docker folder contains the docker related config and the docs/docker.md contains additional details related to docker.\
Nginx - web server to serve the static react files \
Aurora - Team uses Apache Aurora to run apps. Details: docs/aurora.md

### `husky`

This package prevent bad git commit. Husky is configured to run a pre commit hook for 'npm run lint'. No need to run command "npm run lint".

### `BUNYAN_Logger`

Bunyan is a simple and fast JSON logging library. The bunyan-logger-util.js defaults the log level to info for development.
