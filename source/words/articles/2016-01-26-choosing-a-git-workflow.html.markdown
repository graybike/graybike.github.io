---
title: Choosing a Git Workflow
description: "An analysis of two git workflows for small teams of developers."
date: 2016-01-26
type: ENGINEERING
tags: engineering coding git workflow productivity process team
author: Pavan Trikutam
published: false
---

Over the course of the last few weeks, I've worked with a few clients to figure out a Git workflow for their respective teams of developers. For each team we settled on a different workflow. Obviously there are many workflows and specifics out there, but I focused on two different ones.

Essentially, the main difference between the two workflows is based around the release schedule. Here's a quick overview:

- [**Daily Deployment**](#daily-deployment): The developers will be releasing code to production daily, potentially multiple times daily. They'll push features to production as soon as they're finished.
- [**Weekly Deployment**](#weekly-deployment): There's a release to production only once a week. As features are completed, they're automatically pushed to a staging server where the code will be tested over the week, and then all the features are released to production at once at the end of the week.

One isn't necessarily better than the other, and we ended up choosing one or the other based on the structure of teams & internal requirements.



### Common traits of both workflows

Either one of these workflows will:

* Require developing features or bugs in a separate feature branch. 
* Require code reviews before merging into the default branch
* Require squashing commits into logical, cohesive commits before merging.
* Keep `master` in a readily deployable state. Production should always mirror what's in the `master` branch.

#### THE BASIC WORKFLOW

Create a new feature branch off the default branch with your initials, i.e. `pt-add-dropdown`


    git checkout --branch pt-new-feature


While working on your feature, pull from the default branch (either `master`, or `development` depending on the workflow you choose) regularly.

    git pull origin master

Add your commits.


Push it up to Github.

    git push origin pt-new-feature

[Create a pull request] from this branch and request a code review. As you get feedback on your feature, [use `git rebase` interactively to squash your commits into one (or a few at most) logical commit.

[Create a pull request]: https://help.github.com/articles/using-pull-requests/
[use `git rebase` interactively]: https://help.github.com/articles/about-git-rebase/

### <span id="daily-deployment">Daily Deployment</span>

This model is loosely based on the [Github flow].

It has **one** main branch that everyone works off, `master`.

The flow is:

1. Create a feature branch off `master` to build a new feature.
2. Write your code, get it reviewed, squash commits.
3. Merge back into `master`.
4. Deploy immediately.

Obviously there are nuances to this flow -- you can see thoughtbot's great guide to working this way in their [Git protocol document].

One thing to note -- using this method, you can chose to merge with `--ff-only` or `--no-ff`, whatever you wish. You can read about multiple opinions on `--ff-only` vs. `--no-ff` in many places on the internet.

#### THE GOOD

* Features, bug fixes, etc. all have the same workflow. 
* Developers deploy multiple times a day to production, so every developer ends up becoming comfortable with deploying
* It's very simple
* Git history tends to be very simple and linear. That being said, rebasing and fast forwarding requires a very clean history, and when Git gets confused it's a bit tough to keep clean.

#### THE BAD

* It's not obvious to have auto-deploy routines to staging, production, and any other environments you have. Does master auto-deploy to production? Staging?
* Gets confusing if you have the type of feature that requires repeated feedback & iteration from multiple stakeholders before going live. You'll either need to create a [review app] or keep overwriting what's on staging to push your current branch up.
* Staging might get repeatedly overwritten when you've got multiple developers pushing to it at the same time (see the first point above).

[Github flow]: https://guides.github.com/introduction/flow/
[Git protocol document]: https://github.com/thoughtbot/guides/blob/master/protocol/git/README.md
[review app]: https://blog.heroku.com/archives/2015/5/19/heroku_review_apps_beta

### <span id="weekly-deployment">Weekly Deployment</span>

This one is based off of the famous ["A successful Git branching model"] post written by Vincent Driessen.

["A successful Git branching model"]: nvie.com/posts/a-successful-git-branching-model/

#### THE GOOD

#### THE BAD

* It's complicated and is a bit of a learning curve
* Due to the nature of requiring `--no-ff`, there will be a commit history littered with "merge commits"


### Deciding on the workflow

There's a few things to consider when you're deciding between these two.

_What kind of team are you working with?_

This is an important question to ask as you're deciding between workflows.

**Team #1** is mostly comprised of developers, and their marching orders are pretty clear. There isn't as much UI-based stuff and the stakeholders are all pretty technical. Most features being written solve things happening behind the scenes, and whatever UI changes can be tested using feature apps / staging servers.

_Workflow Choice:_ Daily Deployment. The code is always reviewed quickly and automated tests make sure we're not doing anything bad.

**Team #2** has only a few developers, and has many more stakeholders in Design, Marketing, etc. Whenever developers build something, non-technical folks need to sign off on the features. Sometimes it takes them a few days to get back to development before approving a new feature. A lot of the work here is front-end / UI based. Throughout the sprint, there may be iterations on the feature due to copy changes or UI change requests that come in.

_Workflow Choice:_ Weekly Deployment. This gives the rest of the non-technical team a chance to review stuff before it goes out, and submit change requests a few times before a feature is released for good.


OUTLINE:

1. Overview of requirements
1. Type of team:
  1. Multiple stakeholders?
  1. Responsiveness?
1. Type of databse?
  1. Overhead of repo management?

  
  
### TODO: 
- [ ] Add links to discussions between `--no-ff` and `--ff-only`.