module.exports = {
  development: {
    username: 'sa_project_db',
    password: process.env.DB_DEV_PASSWORD,
    database: 'project_db_dev',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'sa_project_db_test',
    password: process.env.DB_TEST_PASSWORD,
    database: 'project_db_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
