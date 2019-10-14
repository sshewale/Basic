Points to consider being Node.js Developer - https://medium.com/wolox-driving-innovation/developing-better-node-js-developers-a176de770539

Koa: In the State of JS 2018 survey, Koa was still the third popular framework https://2018.stateofjs.com/back-end-frameworks/overview/

Some reasons to use Koa - https://github.com/koajs/koa/blob/master/docs/koa-vs-express.md

Even though there may not be as much development as in Express world, Koa is still active and alive and that also includes its ecosystem of middleware (https://github.com/koajs). With that, Koa continues to be company recommended framework of choice

### RESTful API
Building a RESTful API with Koa and Postgres: https://mherman.org/blog/building-a-restful-api-with-koa-and-postgres/ 

RESTful API Design - The basics: https://blog.fullstacktraining.com/restful-api-design-the-basics/

RESTful API Design - difference between HTTP POST, HTTP PUT and HTTP PATCH. - https://blog.fullstacktraining.com/restful-api-design-post-vs-put-vs-patch/

 
### Testing
Testing: We tend to use Jest for testing instead of Chai/Mocha/Sinon

Functional Testing (end to end testing): we tend to do manual and automation functional UI testing 

                                 i) on local environment - smoke (Basic functionality) and sanity testing (Detail testing of modules) 

                                ii) after deploy on test environment (cert or cert-review) - smoke testing (Developer and tester), Sanity testing and Regression testing (tester)

                               iii) after deploy on production (Prod-review and Prod) environment- smoke testing (tester)
                               
Yarn vs npm: UI react teams tend to use yarn backend teams stick with npm (this should be flexible if there are compelling reasons not to do so)                               

Input validation for Rest API Post endpoints: https://www.npmjs.com/package/@hapi/joi 
Link about Joi validation: https://itnext.io/joi-awesome-code-validation-for-node-js-and-express-514b5570ce20





### Front End
# ReactJS
Creating fake API using json server: https://medium.com/codingthesmartway-com-blog/create-a-rest-api-with-json-server-36da8680136d

Deep Dive Into Modern Web Development: https://fullstackopen.com/en/

ESLint : https://eslint.org/
Run 'npm run eslint' to lint the code. This command should always be run before committing any code and any errors/warnings reported should be fixed. The linter is configured to use https://www.npmjs.com/package/eslint-config-airbnb
 
Husky : https://github.com/typicode/husky
This package prevent bad git commit. Added setting into package.json to run eslint before git commit.

Bunyan : https://github.com/trentm/node-bunyan
The bunyan-logger-util.js defaults the log level to info. On Production - to keep logs to the minimum, this environment variable may be changed to error, etc.

Configure global level config : 
Using only development, test and production environment for now as these values are based on the process.env.NODE_ENV variable in React apps by default these are the 3 values in React.
Added custom code for storing global config values. for more details : from repository read /docs/config.md file

 
# Material UI documentaion:
  
https://material-ui.com/
  
Material Table Ducumentation:
  
https://material-ui.com/components/tables/#other
  
https://www.npmjs.com/package/material-table
  
Material Icons:
 
https://material.io/resources/icons/?style=baseline
  
### Unit Testing Jest Enzyme
  
https://www.youtube.com/watch?v=f6Uk0qS_Lho
  
https://airbnb.io/enzyme/

