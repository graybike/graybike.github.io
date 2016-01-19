---
title: Git Workflow For Small Teams
description: "A Git workflow proposal for small teams of developers."
date: 2016-01-11
type: ENGINEERING
tags: engineering coding git workflow productivity process team
author: Pavan Trikutam
published: true
---

I recently worked with a client to develop a Git workflow for their small team of developers. Their requirements were:

- Continuous integration/deployment to staging and production
- Code reviews
- Easy ways to revert releases
- Keep a history of discussions around

There's already a [really popular article] that describes a Git workflow. This post borrows heavily from ideas presented there. It also borrows a few ideas from thoughtbot's [Git Protocol].

This workflow is based on a agile sprint model, where there will be (bi-)weekly releases to production with a number of features that have been completed & acceptance tested during the sprint.

[really popular article]: http://nvie.com/posts/a-successful-git-branching-model/
[Git Protocol]: https://github.com/thoughtbot/guides/blob/master/protocol/git/README.md

### The Tools

- [**Github**]\: for repository hosting & code review.
- [**CircleCI**]\: for continuous integration. It integrates seamlessly with Github and is free for up to one container.
- [**Heroku**]\: for web hosting. CircleCI & Github both integrate well with Heroku.

[**Github**]: http://github.com
[**CircleCI**]: https://circleci.com/
[**Heroku**]: https://www.heroku.com/

### The Setup

There are two main branches in the repository:

- `master`
- `development`


The `master` branch will always reflect what's on production. No exceptions. Pushing to the `master` branch will trigger a deploy directly to production. _Because of this, you better be damn sure you're ready to push live before you merge to `master`_.

All completed features will be submitted to the `development` branch via pull requests. It will auto-deploy to the staging server.

### Create a Feature or Bug Fix

Branch off: `development`  
Merge Into: `development`  
Naming Convention: `<initials>-<branch name>`

For non-urgent features or bug fixes, branch off the `development` branch and create a feature or bug fix branch:

    git checkout development
    git pull
    git checkout -b <initials>-<branch name>


From within your feature branch, rebase regularly to incorporate the latest changes from `development`:

    git fetch origin
    git rebase origin/development

Resolve conflicts & create commits as you go along. 

When your feature is ready for merging into `development`, [use `git rebase` interactively] to squash all your commits into one. See the "Squashing Commits" section for more detail.

Share your branch.

    git push origin <initials>-<branch name>

[Create a pull request] from this branch and request a code review. _Make sure you create a PR that merges into the `development` branch, not the `master` branch_.

_Your PR should merge INTO `development` FROM your feature branch._

[use `git rebase` interactively]: https://help.github.com/articles/about-git-rebase/
[Create a pull request]: https://help.github.com/articles/using-pull-requests/

#### Squashing Commits

Squashing commits is good for many reasons: 

- allows you to create better commit messages 
- rids your history of commits like "fix whitespace"
- makes it easy for reviewers to see what changes you've made in one go
- makes it easier to `bisect` the Git history when debugging

First, update your branch with the latest.

    git fetch origin
    git rebase origin/master

Then, count the number of commits in your branch. If your branch has 3 commits, do the following:

    git rebase --interactive HEAD~3

This will open up an editor with only the 3 last commits from the Git history, leaving the rest of the commit history alone. It'll probably look something like this (actual commits from the history of this post):

    pick 93accac fixing grammar
    pick e054794 adjust spacing on code
    pick c344407 consistent URL formatting

`reword` & `squash` the commits into a logical, easy to understand progression. Ideally you'll squash them into one, but more than one is acceptable if it's a really large feature. The goal here is to make things easy for the person reviewing your code.

### Merging in a feature

Once your code has been reviewed, fix any issues in your branch. Once again, squash commits into one. When your branch is ready, [force push using `--force-with-lease`] to make sure you're not overwriting anyone else's code.

    git push --force-with-lease origin <initials>-<branch name>

Merge the feature branch into `development`.

    git checkout development
    git merge --ff-only <initials>-<branch name>

Once this is done, delete your branch.

    git push origin --delete <initials>-<branch name>
    git branch --delete <initials>-<branch name>

[force push using `--force-with-lease`]: https://developer.atlassian.com/blog/2015/04/force-with-lease/

#### A Note on Fast Forward

Why use `--ff-only`? [Benjamin Sandofsky recommends] not using `--no-ff`:

> So you add a new rule: “When you merge in your feature branch, use `–-no-ff` to force a new commit.” This gets the job done, and you move on. […]

> The `--no-ff` band-aid, broken `bisect`, and `blame` mysteries are all symptoms that you’re using a screwdriver as a hammer. […]

Ben put together a [great diagram] to visualize this. In a nutshell, `--no-ff` is really only useful when you're merging in multiple commits from a branch. Since we're squashing branch commit histories into one logical commit, using `--ff-only` works well. It will force the merge to explicitly fast forward, and will error out if it encounters issues.

[Benjamin Sandofsky recommends]: https://sandofsky.com/blog/git-workflow.html
[great diagram]: https://sandofsky.com/images/fast_forward.pdf

### Release

The `development` branch is now full of tested features that are ready for deployment. To release, create a pull request that will be merging the `development` branch into the `master` branch.

_Your PR should merge INTO `master` FROM `development`._

Set the title of the PR to be:

    YYYY-MM-DD Release

In the description of the PR, you can add details like:

- Features in the PR
- Trello/Asana Cards
- Airbrake/Honeybadger Notifications

This can act as the weekly release report. Once the report is complete, you can hit the "Merge Pull Request" button. Once merged, the release will be auto-deployed to production. 

### Hotfixes: Urgent Production Issues

Branch off: `master`  
Merge Into: `master` and `development`  
Naming Convention: `<initials>-hotfix-<branch name>`  

For issues that cannot wait until the end of a sprint cycle, create hotfix branch from the `master` branch:

    git checkout master
    git pull
    git checkout -b <initials>-hotfix-<branch name>

Add your fix and rebase from `master` regularly to keep up to date. Once your fix is complete, squash your commits into one and submit another pull request. This time, make sure you are merging into the `master` branch.

_Your PR should merge INTO `master` FROM your hotfix branch._

Once you've gotten approval, merge your hotfix branch into the `master` branch.

    git checkout master
    git merge --ff-only <initials>-hotfix-<branch name>

Merge your hotfix branch into development as well.

    git checkout development
    git merge --ff-only <initials>-hotfix-<branch name>

Once this is done, delete your branch.

    git push origin --delete <initials>-hotfix-<branch name>
    git branch --delete <initials>-hotfix-<branch name>


### Configuration

#### CircleCi

Here's the basic configuration (`circle.yml`) I use for CircleCI. Make sure you've got your [Heroku API Key & SSH key set up in CircleCI].

```yaml
deployment:
  production:
    branch: master
    commands:
      - git push git@heroku.com:yourapp.git $CIRCLE_SHA1:master
      - heroku run rake db:migrate --app yourapp
      - heroku run 'rake cache:clear' --app yourapp
  staging:
    branch: development
    commands:
      - git push git@heroku.com:yourapp-staging.git $CIRCLE_SHA1:master
      - heroku run rake db:migrate --app yourapp-staging
      - heroku run 'rake cache:clear' --app yourapp-staging
```

This will auto-deploy your `development` branch to staging, and will auto-deploy your `master` branch to production. For both environments, after deploying, it will auto-run migrations & clear your cache. You can tweak these after-deploy commands to your liking. You may also want to include [automated testing] in your builds.

[Heroku API Key & SSH key set up in CircleCI]: https://circleci.com/docs/continuous-deployment-with-heroku
[automated testing]: https://circleci.com/docs/configuration#test


#### Github

Set the default branch to be `development` in the Settings tab of your repository. This makes sure than any pull request will default to merging into the `development` branch.

Ensure you set both `master` and `development` to be protected branches. Make sure that they require passing a CircleCI status check before merging.

[revert-pull-request]: https://help.github.com/articles/reverting-a-pull-request/

<hr>

That's about it. Got any comments? Questions? [Shoot me an email] or [find me on twitter].

[Shoot me an email]: hello@graybike.co
[find me on twitter]: https://twitter.com/ptrikutam