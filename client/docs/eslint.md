**ESLint - linting for Reactjs**\
https://eslint.org/
Husky is configured to run “npm run lint” before git commit. Any errors/warnings reported should be fixed, without which the code cannot be committed to the repo. The linter is configured to use https://www.npmjs.com/package/eslint-config-airbnb

**Issue while integrating eslint v6.2.1 with react application:**\
When adding eslint v6.2.1 to a new react project, you get an error in console "different version of eslint was detected higher up in the tree"
To fix this issue, downgraded eslint version to ^5.16.0 in package.json

**Added .eslintrc.json - eslint configuration**\
This plugin exports a recommended configuration that enforces React good practices.
https://github.com/yannickcr/eslint-plugin-react#recommended
