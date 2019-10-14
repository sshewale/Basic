Git Branching Strategy https://docs.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops

Git Commit Message Guidelines https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53

Git Squash When submitting a PR with multiple commits, check if the commits can be squashed into one before the feature/bug, etc. branch is merged into master.

      Advantages: Keeps the commit history clean

                          Makes it easier to identify all the changes made under a particular ticket/commit

     The commits can be squashed either in GitHub when merging the branch/PR into master or on your local machine using following commands - 

GitHub:

Local Machine:

      Git Commands to Squash commits:                          

git checkout <branch_Name>
git reset --soft HEAD~<Number of the Commits you want to go back>
git commit -m <with the message>
git push --force origin +<branch_Name>

Note: In our case, we would like to squash the commits (Git commands and not GitHub) when submitting the PR. This way the PR reviewer doesn't have to go through every individual commit to review the PR.

Feature/bug branches - As a best practice, create a branch on GitHub/Bitbucket as soon as you start working on a ticket.

Always push in progress work before EOD to remote branch so no work is lost in case there are any issues on the local/dev machine. Also it makes easier for other team members to assist if needed. Multiple commits can later be squashed as per above guidelines when creating a Pull Request. 

Never store credentials as code/config in source code - Use environment variables or key vaults to store client secrets, passwords, etc. Do not check in/commit code with passwords, client secrets, etc. to Bitbucket/GitHub repos.

Structure of a NodeJS API Project - https://medium.com/codebase/structure-of-a-nodejs-api-project-cdecb46ef3f8

In addition to above structure, a docs folder to add additional documentation in addition to the README.md. Another option would be to add the additional doc to the project wiki or Confluence but that would involve managing 2 repos. This way the docs would be version controlled and available within a single repo.

File naming convention (Koa/NodeJS Project) - For consistency use a hyphen (minus) in the file names, e.g. package-lock.json or videos-service.js

Error Handling - We should handle error at front end as well as in middle-ware using exception handling. If you handle your errors, your program will likely continue to function after an error, your application can likely continue working, and you can provide a report of exactly how the bug occurred so you can fix it.  refer below links for koa:

https://github.com/koajs/koa/wiki/Error-Handling
https://github.com/jeffijoe/koa-respond

Koa Global Error Handling Middleware has been added to the brightcove-db.api and the 3play-plugin-tools-api repos: https://github.com/hmhco/brightcove-db.api/commit/055fff13892e21da304602a9014ed2f30aab8065

Definition of Done

Unit tests passed. Work in progress - integration and e2e/UI tests.
Code reviewed
Acceptance criteria met. This requires acceptance criteria to be defined on the ticket.
Functional & Non-Functional requirements met 
Team accepts the User Story
Integrated into a clean build
Functionality documented in necessary user documentation
Merge Conflicts

Normally, you would run into either of these 2 scenarios:

1 - Merge conflicts after a PR is created

     Follow instructions from github documentation https://help.github.com/en/articles/resolving-a-merge-conflict-on-github

2 - Merge conflicts when trying to merge master into your local branch.

     Merging master into your local branch would be required when the latest code from master is needed in your local branch. Refer Merge Conflicts section on the VS Code documentation: https://code.visualstudio.com/docs/editor/versioncontrol to resolve the merge conflicts in VS code. 

In either of above cases, keep the merge from master commit a separate commit so it is easier to identify the changes that are coming from master and the changes made as a part of the ticket being worked on.
