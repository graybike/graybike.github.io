---
title: Designing and building an open-source knowledge-sharing platform from the ground up
subheading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
tags: UX/UI Design, Front & Back-end Development (React, Rails, ElasticSearch), Product Strategy
client: Island Press
site: "https://greencommons.net"
code: https://github.com/greencommons/commons
---

> I have worked with Pavan for 18 months on [the Green Commons] project that includes ingesting ingestion in multiple formats, indexing it, making it openly accessible, providing social tools for people to collaborate on projects using that data, and making it available through an open API. I recommend him without reservation, and would gladly hire him again.
>
> He has strengths at every level of the project stack, from system architecture, to frameworks, to implementing features, to UX, to some web site design, all the way up to suggesting features and improving the ones already scheduled. He is entirely reliable, managing his time and that of the people he brought on board, hitting his marks, and pretty consistently coming in under budget. He is committed to doing good work that does good in the world. He is a trustworthy and delightful person.
>
> <cite>David Weinberger</cite>

[Green Commons] is a knowledge-sharing, learning platform for environmental research and action. It provides a place for people working on environmental issues to find and share resources, information, and ideas; to build networks; and to work collaboratively.

Island Press, along with [David Weinberger](http://weinberger.org/), approached Gray Bike in 2016 to embark on an ambitious project. They wanted to build a knowledge-sharing and learning platform geared towards people working on environmental issues. When they approached us, it was just an idea with a few documents outlining features. Over the course of the next 12 months, we worked closely with the Island Press team to go from idea to design to launch.

**Oh, and did we mention it's open source? [Check out the code on Github.]**

Green Commons is an ongoing project, and we’ll continue to be their primary technical partner as the project grows, evolves, and scales. [Follow along with us!]

### User Research

Though Island Press came prepared with a series of features and product ideas for the platform, our first step was to do extensive user reasearch. We interviewed journalists, scientists, policymakers, activists, and professors. Armed with many hours of interviews and data, we set about to design the platform from the ground up.

### Design

From a series of documents outlining features, Gray Bike worked with the Island Press team to distill these into a set of wireframes. With a limited budget, we wanted to focus as much effort as we could on the development side of things without sacrificing design. Gray Bike created a set of lightweight wireframes, and then translated them into a series of high-fidelity designs. Once functionality and wireframes were set, we started the development process concurrently while workig on higher fidelity wireframes.

<p class='case-study__image-display text-center'>
  <img src='/images/work/green-commons/group-flow.jpg'>
  <span>A quick sketch of the various group/network flows.</span>
</p>


<p class='case-study__image-display text-center'>
  <img src='/images/work/green-commons/wireframes.jpg'>
  <span>A few of the screens we wireframed in the early stages.</span>
</p>

<p class='case-study__image-display text-center'>
  <img src='/images/work/green-commons/search-page-final.jpg'>
  <span>The final search results page.</span>
</p>

### Development

We built this project using Ruby on Rails, React, and Postgres. We wrote the codebase with a focus on making sure new contributors would be able to quickly get up & running, and make contributions almost immediately. But don't take our word for it, look through the [code base], [our PRs], and [the issue tracker] to see how we work.


One of the requirements for the project was that it create a searchable index of large volumes of text: books, articles, reports, etc. We needed something performant, flexible, and stable. We used ElasticSearch and created a number of well-architected custom integrations with Rails and ActiveRecord so that we could rely on ElasticSearch, but developers wouldn't have to mess to closely with the internals of the system to leverage its power.

Following an agile approach, we are continuing to work on a weekly basis to make informed, iterative improvements to the project.

<p class='case-study__image-display text-center'>
  <img src='/images/work/green-commons/homepage-final.jpg'>
  <span>The final home page.</span>
</p>


[Green Commons]: https://greencommons.net
[Check out the code on Github.]: https://github.com/greencommons/commons
[code base]: https://github.com/greencommons/commons
[Follow along with us!]: https://github.com/greencommons/commons
[our PRs]: https://github.com/greencommons/commons/pulls?q=is%3Apr+is%3Aclosed
[the issue tracker]: https://github.com/greencommons/commons/projects/1
