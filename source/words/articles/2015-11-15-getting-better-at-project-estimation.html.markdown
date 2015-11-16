---
title: Getting better at project estimation
description: "No matter what kind of project you've ever worked on, there's always one thing everyone wants to know before it starts: How long will this take?"
date: 2015-11-15
type: CONSULTING
tags: freelancing project estimation psychology consulting
author: Pavan Trikutam
published: true
---

How many times have you started a project with some kind of assumption on the project duration, and how many times have you found that to be off? Pretty much everyone gets it wrong. What we can do to be better about it?

One notorious example of this in the US was the development of the [healthcare.gov](https://www.healthcare.gov/) website. Originally, the project was estimated to cost [about $93.7 million][93_million], but the final cost [exceeded $2 billion dollars][2_billion]. It doesn't really matter who is to blame for that drastic underestimation. My only point here is: whether a project is small or large, estimating cost is hard. Really hard. And almost everyone is likely to get at least part of it wrong.

I'm going to explore a few things that go wrong when estimating projects. Not everything thing here may apply to you, but hopefully you'll find it at least some of it useful. Above all, I hope to provide a perspective for makers on where they could potentially go wrong when making estimates.

### How does it work?

Typically, when a developer or designer estimates a project, she might do a few things:

* Ask a few questions about the project and try to learn a bit more.
* Try to break the overall project down into smaller pieces.
* Confer with a few other folks and play ["planning poker"][planning_poker].
* Think about times where she's built something similar before and try to remember how long it took.

Unfortunately, the estimate is usually needed in a short amount of time. She will have to take a shot in the dark to put some numbers together. She probably figures any inaccuracies can be made up by burning the midnight oil. The strange part is she's likely pretty confident about being able to deliver the project on time, even though she doesn't have much concrete evidence to prove the estimate will be accurate.

This confidence comes from being overly optimistic, a type of [congitive bias][cognitive_bias]. But I'll get more into that later. First, a story:

In Daniel Kahneman's excellent book, *[Thinking, Fast and Slow][thinking_fast_slow]*, he talks a lot about the psychology behind congitive biases. He describes an example where he and a small team were designing a curriculum to teach decision making to high school students. After working for one year (and making great progress), his team got together to estimate the remaining time to complete the project. They predicted that the project would take two years to complete. The project ended up taking eight years to finish.

### The outside view

When estimating projects, people often fail to take into consideration a baseline prediction to use as a comparison.

Essentially, this concept is the fact that when estimating projects, we fail to consider what other similar projects (the "outside view") took to complete. To make the estimate, we draw solely upon the evidence right in front of us (the "inside view") to make a judgement. This approach often fails due to a lack of actual evidence from similar projects.

For many projects, not everyone has a baseline to compare to when trying to estimate a project. That's why clients go to the experts (that's us) to figure things out. The experts have worked on many projects like this and have a wide range of examples to draw from.

This is where it gets interesting. Of Kahneman's team working on the curriculum, most of the members did not have prior experience working on a similar project, nor did they know of other projects they could compare. However, one member of the project did know about other similar projects, and how long they took. Yet, even though he did have this larger data set to draw on, he ignored it and made his first prediction based on his experience in the projet thus far and intuition. **He consciously ignored evidence that would help him estimate his project better.**

Only once he was asked a pointed question about how other projects of the type fared did he come up with an accurate estiamte.

This happens pretty often. To quote Kahneman:

> This is common pattern: people who have information about an individual case rarely feel the need to know the statistics of a class to which the case belongs.

We tend take the first and easiest piece of evidence (the project we've been involved in), and we never bother to look for additional evidence. It's sometimes referred to as ["willful blindness"][willful_blindness]: we instinctively ignore evidence even when it's right in front of us.

### Optimism Bias

Often when estimating projects, developers and designers tend to think in "best case" terms when estimating projects. How long will the authentication system take to build? Probably just a few hours. How soon can I get the entire onboarding flow mocked up? Probably a day, two days max.

More often than not, we simply ignore any chance of mishap or project delay, and we assume the best for estimation. Even if we *think* we're assuming the worst, we probably aren't. We don't consider the fact that statistically speaking, it's very unlikely that we'll breeze through a project without any setbacks.

### Avoiding the planning fallacy

The two pitfalls described above are part of what is known as ["The Planning Fallacy"][planning_fallacy]. In other words, it's a matter of being too optimistic about a timeline, and ignoring evidence available to us indicating otherwise.

To counter the "inside view", we need to understand our instinctive first guess may not always be completely accurate. That first guess isn't taking into account any of the unknowns, and we need to spend time researching what those could be. When we approach estimation with an analytical eye, looking for evidence to support our idea of how long something will take, we're more likely to land on an accurate estimate. Yes, this may take longer to come up with some accurate numbers -- but it's well worth it. It's better to invest the time up front and mitigate our risk for delays down the line.

> The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.
>
> <cite>Tom Cargill, Bell Labs</cite>

We humans tend to think things will go better for us than they do for others. Unfortunately, it's pretty unlikely. It's important to bake in room for error & delays. When putting together an estimate, I always add in about 20 percent time as room for delay. If I'm able to finish ahead of schedule, it gives me room to add polish to make the project that much better. If nothing else, I can launch early! But, if something does delay the project, I've got a bit of padding to make sure it still gets out on time.

### Diving Deeper

Project estimation is a matter of doing your due diligence. I view project estimation as starting the design/discovery phase early. Before we can produce any concrete numbers, we need to do some work up front. Mock up some wireframes to understand the interaction better. Ask lots of questions about behavior, and try to get into specifics. Think of edge cases and all possible scenarios.

A good project proposal & estimate has the added benefit of acting as a project plan.  When you've gone to such great lengths to understand a project before coming up with an estimate, you're much more accurate and likely to predict challenges. Project research & planning should be the first phase of a project. When it's done, there is a concrete deliverable of research and a more accurate view of timelines.

### Break down components, not time

Try to break things down as small as you can when estimating. It leaves less room for error, and it makes it much easier to find examples of other projects doing the same thing. It's very helpful to get as granular as possible when planning. Of course, this takes time. There's usually a lot of communication between designer & client to hash out the smaller details before an accurate estimate can be put forth.

However, one thing that is *not* useful is trying to estimate in small units of time (hours). It's much easier to come up with an accurate estimate when you're dealing with a matter of days (preferably weeks). As designer [Matt Griffin mentions][matt_griffin] describes, there's a huge difference between a productive hour vs. a wasted hour. The difference averages out when we think in days or weeks instead of hours.

### Track your time meticulously

I can't stress this enough. Diligently tracking your time helps you understand exactly how long it takes to finish a task. It's a great way to look back and know how close you were to your original estimate. You'll know the breakdown of time between meetings, writing code, designing, etc. Over time, you'll build your own little database of projects to use as a baseline for how long a project may take you.

### Adjust scope, not schedule

You'll get a client that says "we really need this project done a month earlier", and you think to yourself, "maybe I can just work nights & weekends and pull this off".

Even if you manage to work day and night to pull off a project, the quality of your work will suffer drastically because you'll burn yourself out. More often, work will compound and you'll realize you have more work left to do, and you'll have to delay the project.

Committing to an unreasonable schedule is disingenuous. It's damaging to you, your client, and the project. The art of project estimation sometimes involves saying no. It's your job as the expert to convey the true cost of building things.

It's better to be realistic early on in a project and cut out the fat rather than realize you're going to miss your launch after you've announced it to the whole world.

### Estimation is collaboration

Project estimation should be a collaborative process. Both you and the client should be heavily involved in the estimation phase. It gives opportunity to learn about the project and discover nuances that would normally get overlooked when the process is one-sided. It allows for client input and feedback, and gives both parties a view into what it will be like to work together.

Obviously, doing this takes time (are you sick of hearing me say this yet?). Giving project estimation the importance and space it needs will result in a more accurate estimate, a better project, and a happier working relationship.

<hr>

I work with a lot of companies to help them plan their projects and build products. If you'd like some help planning your next project, [I'd love to hear from you](mailto:hello@graybike.co).

P.S. Much thanks to [Patrick Johnson](http://pbj.me/) for editing this post. Go check out his work.

[93_million]: http://uk.reuters.com/article/2013/10/17/uk-usa-healthcare-technology-insight-idUKBRE99G06120131017
[2_billion]: http://www.bloomberg.com/news/articles/2014-09-24/obamacare-website-costs-exceed-2-billion-study-finds
[planning_poker]: https://en.wikipedia.org/wiki/Planning_poker
[cognitive_bias]: https://en.wikipedia.org/wiki/Optimism_bias
[planning_fallacy]: https://en.wikipedia.org/wiki/Planning_fallacy
[thinking_fast_slow]: http://www.amazon.com/gp/product/0374533555
[willful_blindness]: https://www.brainpickings.org/2014/08/27/willful-blindness-margaret-heffernan/
[matt_griffin]: http://alistapart.com/column/creating-accurate-estimates