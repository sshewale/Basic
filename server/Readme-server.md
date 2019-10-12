### Create REST api

### Nodemon

Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.\
To install nodemon globally - npm install -g nodemon.

### Dependencies

**dotenv** - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env\
Rename .env.sample file present at the root folder to .env Update the file with appropriate values for following environment variables

- _NODE_ENV=development_ enable additional logging on development machine.
- _DB_DEV_PASSWORD=password_
  Replace password with the appropriate "sa_project_db"(PASSWORD) login/group role password created using pgAdmin or postgres cli/psql
  This password is used in config/config.js to connect to the database
- _BUNYAN_LOG_LEVEL_ Choose between different log levels - fatal, error, warn, etc. Details: https://github.com/trentm/node-bunyan#levels The bunyan-logger-util.js defaults the log level to info. On Production - to keep logs to the minimum, this environment variable may be changed to error, etc.
- Refer section 4.3 under 'Setting Jest Test Environment' section for test specific environment variables

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Note:**\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Mac:** .env file should load above environment variables once they have been added/saved in the .env file\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; **Windows:** Might need to add above as systems variables under Environment variables followed by a machine restart for changes to take effect.
Or same can be done as user variables under Environment variables which may not require machine restart.

**Prettier - Code formatter**\
If using VS code editor, install Prettier - Code formatter.\
Press Option/Alt + Shift + F (Mac) to format the code
_npm run prettier_ - Format all the js files with prettierrc rules

**ESLint - linting for JavaScript**\
https://eslint.org/
Run 'npm run eslint' to lint the code. This command should always be run before committing any code and any errors/warnings reported should be fixed. The linter is configured to use https://www.npmjs.com/package/eslint-config-airbnb-base

**Postgres Database and Sequelize**\
Install Postgres and pgAdmin 4 for local testing - https://www.postgresql.org/download/ & https://www.pgadmin.org/download/\

Create login/group role - sa_project_db(USER) and project_db_dev(DB) database using pgAdmin or postgres cli/psql - this DB configuration is present under config/config.js

# Sequelize

Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication, database migrations and more.

_To generate a new model_ use sequelize model:generate, e.g. npx sequelize model:generate --name Video --attributes account_id:integer,video_id:integer,reference_id:integer,original_file_name:string,created_at:date,created_by:date,updated_at:date,updated_by:string,published_at:date,state:string\
Details: https://github.com/sequelize/cli/blob/master/docs/FAQ.md

_To apply migrations_ on local database: npx sequelize db:migrate\

_To seed data into model_
to generate seed use : npx sequelize seed:generate --name seedName, eg npx sequelize seed:generate --name videos.
to run seed use : npx sequelize db:seed:all

Details: http://docs.sequelizejs.com/manual/migrations.html

**Setting Jest Test Environment**

1. Naming convention for test file - <original_filename>.<test>.js Eg: test file for videos-controller.js should be videos-controller.test.js.
   This will help jest to detect test files
2. Write appropriate test cases.
3. To make HTTP assertions use supertest npm package
4. Run 'npm test' to run all the unit and integration tests  
   Setup before running integration tests:  
   4.1 Start postgresql service. Create sa*project_db_test login group/role with login/superuser privileges.  
   \_Note: Before using 4.2 below, update the DB_TEST_PASSWORD with the appropriate password in package.json scripts under db:test:create & db:test:migrate*  
   4.2 Sequelize test db creation: Use npm run db:test:create to create the test database and db:test:migrate to run pending migrations on the test db.  
   4.3 Add/update NODE_ENV=test & DB_TEST_PASSWORD in the .env file
5. Note: For additional watch scripts, etc. refer package.json scripts section

Various Jest CLI options https://jestjs.io/docs/en/cli#verbose

**Koa Error Middleware**
The code uses Koa Error Handling to catch downstream errors. Details: https://github.com/koajs/koa/wiki/Error-Handling
