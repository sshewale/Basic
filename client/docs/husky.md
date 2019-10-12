https://github.com/typicode/husky
Husky can prevent bad git commit, git push and more 🐶 woof!
Added setting into package.json to run eslint before git commit.
If you forget to run "npm run lint" command before commit of your code, husky will run "npm run lint" before commit and show log.

husky supports all Git hooks defined at https://git-scm.com/docs/githooks
Server-side hooks (pre-receive, update and post-receive) aren't supported.

**Note** - For Husky to install properly, git version required should greater that 2.13
