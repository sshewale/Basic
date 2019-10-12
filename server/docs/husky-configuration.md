### Husky configuration 
- While working on an enterprise development team, it is important that all code linting and unit tests are passing before committing code, especially if you are using some form of continuous integration.
- Husky can prevent bad git commit, git push and more!
- Added setting into package.json to run eslint, prettier and test before git commit.
- If incase commands like linting or prettier or tests are missed before commiting the code, husky will run them before commit and show log.

husky supports all Git hooks defined at https://git-scm.com/docs/githooks
Server-side hooks (pre-receive, update and post-receive) aren't supported

**Note** - For Husky to install properly, git version required should greater that 2.13

Reference links: 
- https://blog.vanila.io/pre-commit-git-hooks-with-husky-b2fce57d0ecd
- https://github.com/typicode/husky

