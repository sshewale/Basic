###ESLint - linting for Javascript**\

# Eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code. In many ways, it is similar to JSLint and JSHint with a few exceptions:

- ESLint uses Espree for JavaScript parsing.
- ESLint uses an AST to evaluate patterns in code.
- ESLint is completely pluggable, every single rule is a plugin and you can add more at runtime.
  Reference links for more details 
  - https://www.npmjs.com/package/eslint
  - https://eslint.org/
  
# eslint-config-airbnb-base
This package provides Airbnb's base JS .eslintrc (without React plugins) as an extensible shared config.
Reference link for more details - https://www.npmjs.com/package/eslint-config-airbnb-base
 
# eslint-plugin-import
This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor.
Refernce link for more details - https://www.npmjs.com/package/eslint-plugin-import

# Husky for eslint
Husky is configured to run “npm run lint” before git commit. Any errors/warnings reported should be fixed, without which the code cannot be committed to the repo. 
 