---
title: Getting better at project estimation
description: "No matter what kind of project you've ever worked on, there's always one thing everyone wants to know before it starts: How long will this take?"
date: 2015-11-10
type: CONSULTING
tags: freelancing project estimation psychology consulting
author: Pavan Trikutam
published: false
---

How many times have you started a project with some kind of assumption on the project duration, and how many times have you found that to be off? Pretty much everyone gets it wrong. What we can do to be better about it?

One particularly notorious example of this in the US was the development of the [healthcare.gov](https://www.healthcare.gov/) website. Originally estimated to cost [about $93.7 million][93_million], the final cost [exceeded $2 billion dollars][2_billion]. I'm not here to debate who was at fault or what went wrong. A quick google search will bring you plenty of that. My only point here is: whether a project is small or large, estimating cost is hard. Really hard. And almost everyone is likely to get at least part of it wrong.

I'm going to explore some of the things that go wrong when planning & estimating projects, through the lens of my experience with software development. Much of what I'm going to cover are things that I've learned from people much smarter than me. I've just tried to distill it into a few points as I've understood it. Not everything thing here may apply to you, but hopefully you'll find it at least some of it useful.

Above all, I hope to provide two things:

1. A perspective for developers, designers, or project managers on where they could potentially go wrong when making estimates.
2. A perspective for people hiring one of the above on why project estimation is so difficult.
3. Some ways to avoid these delays, and have a more successful project.

### How does it work?

Typically, when an developer or designer needs to estimate a project, she asks a few questions about the project and tries to learn a bit more. She may potentially try to break the overall project down into smaller pieces. She may also confer with a few other folks and play ["planning poker"][planning_poker]. She might think about times where she's built something similar before and try to remember how long it took.

Ultimately, though, the estimate is usually needed in a short amount of time, and she will be taking a shot in the dark to put some numbers together. She probably figures that any inaccuracies can be made up by burning the midnight oil and catching up. The strange part is she's likely pretty confident about being able to deliver the project in that time frame, despite the fact that she doesn't have much concrete evidence to prove the estimate will be accurate.

This confidence typically comes from being overly optimistic, a type of [congitive bias][cognitive_bias]. But I'll get more into that later. First, a story:

In Daniel Kahneman's excellent book, *[Thinking, Fast and Slow][thinking_fast_slow]*, he talks a lot about the psychology behind congitive biases. He describes an example where he and a small team were designing a curriculum to teach decision making to high school students. After working for one year (and making great progress), his team got together to estimate the remaining time to complete the project. They predicted that the project would take two years to complete. The project ended up taking eight years to finish.

### The outside view

When estimating projects, people often fail to take into consideration is a baseline prediction to use as a comparison.

Essentially, this concept is the fact that when estimating projects, we fail to consider what other similar projects (the "outside view") took to complete. To make the estimate, we draw solely upon the evidence right in front of us (the "inside view") to make a judgement. This is inherently flawed because we're ignoring actual evidence of a project's likelihood to succeed by drawing on a limited set of experiences.

Obviously, for many projects, not everyone has a baseline to compare to when trying to estimate a project. That's why clients go to the experts (that's us) to figure things out. We've worked on many projects like this, and we've seen others do it many times. We have a wide range of examples to draw from to make an informed judgement.

This is where it gets interesting. Of Kahneman's team working on the curriculum, most of the members did not have prior experience working on a similar project, nor did they know of other projects they could compare to. However, one member of the project did know about other similar projects, and how long they took. Yet, even though he did have this larger data set to draw on, he ignored it and made his first prediction based on his experience in the projet thus far and intuition. **He consciously ignored evidence that would help him estimate his project better.**

Only once he was asked a pointed question about how other projects of the type fared did he come up with an accurate estiamte.

This happens pretty often. To quote Kahneman:

> This is common pattern: people who have information about an individual case rarely feel the need to know the statistics of a class to which the case belongs.

We tend take the first and easiest piece of evidence (the project we've been involved in), and we never bother to look for additional evidence. It's sometimes referred to as ["willful blindness"][willful_blindness]: we instinctively ignore evidence even when it's right in front of us.

### Optimism Bias

Often when estimating projects, developers and designers tend to think in "best case" terms when estimating projects. How long will the authentication system take to build? Probably just a few hours. How soon can I get the entire onboarding flow mocked up? Probably a day, two days max.

More often than not, we simply ignore any chance of mishap or project delay, and we assume the best for estimation. Even if we *think* we're assuming the worst, we probably aren't. We don't consider the fact that statistically speaking, it's very unlikely that we'll breeze through a project without any setbacks.

### Avoiding the planning fallacy

The two pitfalls described above are part of what is known as ["The Planning Fallacy"][planning_fallacy]. In other words, it's a matter of being too optimistic about a timeline, and ignoring evidence available to us that may indicate otherwise.

To counter the "inside view", we need understand that our instinctive first guess may not always be completely accurate. That first guess isn't taking into account any of the unknowns, and we need to spend time researching what those could be. When we approach estimation with an analytical eye, looking for evidence to support our idea of how long something will take, we're more likely to land on an accurate estimate. Yes, this may take longer to come up with some accurate numbers -- but it's well worth it. It's better to invest the time up front and mitigate our risk for delays down the line.

We humans tend to think things will go better for us than they do for others. Unfortunately, statistically speaking, that's pretty unlikely. It's important to bake in room for error & delays. When putting together an estimate, I always add in about 20 percent time as room for error. If I'm able to finish before that extra time, it gives me room to add polish to make the project that much better. If nothing else, you can launch early! But, if something does delay the project, I've got a bit of padding in there to make sure it still gets out on time.

To drive this point home, consider this quote:

> The first 90 percent of the code accounts for the first 90 percent of the development time. The remaining 10 percent of the code accounts for the other 90 percent of the development time.
>
> <cite>Tom Cargill, Bell Labs</cite>

### Diving Deeper

Project estimation is a matter of doing your due diligence. I think of project estimation as starting the design/discovery phase early. Depending on how far along the design process a potential client has come, you might even mock up some wireframes to try and understand behavior & design. Ask lots of questions about behavior, and try to get into specifics. Think of edge cases and all possible scenarios.

A good project proposal & estimate has the added benefit of acting as a project plan.  When you've gone to such great lengths to understand a project before coming up with an estimate, you're much more likely to be accurate and be able to predict challenges. I often do a project estimate as the first phase of a project -- when it's done, there is a concrete deliverable of research and a more accurate view of timelines.

### Break down components, not time

Try to break things down as small as you can when estimating -- it leaves less room for error, and it makes it much easier to find examples of other projects doing the same thing. It's very helpful to get as granular as possible whe planning how long something will take. Of course, this takes time. There's usually a lot of communication between designer & client to hash out the smaller details before an accurate estimate can be put forth.

However, one thing that is *not* useful is trying to estimate in small units of time (hours). It's much easier to come up with an accurate estimate when you're dealing with a matter of days (preferably weeks). As designer [Matt Griffin mentions][matt_griffin] describes, there's a huge difference between a productive hour vs. a wasted hour. That difference averages out when we think in days or weeks instead of hours.

### Track your time meticulously

I can't stress this enough. Being diligent about tracking your time helps you know exactly how long you took to finish it. It's a great way to look back on a project and know how close you were to your original estimate. It's also a great way to know how much time during a project you'll spend on meetings, writing code, designing, etc. It's also extremely helpful the next time a project comes up. Over time, you'll build your own little database of projects to use as a baseline for how long a project may take you.

### Adjust scope, not schedule

<!-- Sometimes an inaccurrate estimate can come from simply wanting to land the job. Sometimes it comes from pressure from your boss, or another stakeholder in the project. Sometimes it's intentional, sometimes it's not.
 -->
You'll get a client that says "we really need this project done a month earlier", and you think to yourself, "maybe I can just work nights & weekends and pull this off". This is bad news.

Even if you manage to work day and night to pull off a project, the quality of your work will suffer drastically due to you almost burning yourself out. More likely, a few days before launch you'll realize that you've got way too much work left, and the project will need to be delayed.

Committing to a schedule you know is unreasonable is disingenuous, and it's damaging to you, your client, and the project. The art of project estimation sometimes involves staying firm and saying no. It's your job as the expert to convey the true cost of building things.

It's better to be realistic early on in a project and cut out the fat rather than realize you're going to miss your launch after you've announced it to the whole world.

### Estimation is collaboration

In the end, project estimation should be a collaborative process. Both the people creating the estimate as well as the people requesting it should be involved in the process. It gives opportunity for discussion, learning about the project, and provides room to discover nuances that would normally get overlooked when the process is one-sided. It gives clients the opportunity to provide input and feedback, and will give both parties a view into what it will be like to work together.

Obviously, doing this takes time (are you sick of hearing me say this yet?), but it's well worth it to spend it up front. Giving project estimation the importance and space it needs will ultimately result in a more accurate estimate, a better project, and a happier working relationship.


<hr>

I work with a lot of companies to help them plan their projects and build products. If you'd like some help estimating your next project, [I'd love to hear from you](mailto:hello@graybike.co).

[93_million]: http://uk.reuters.com/article/2013/10/17/uk-usa-healthcare-technology-insight-idUKBRE99G06120131017
[2_billion]: http://www.bloomberg.com/news/articles/2014-09-24/obamacare-website-costs-exceed-2-billion-study-finds
[planning_poker]: https://en.wikipedia.org/wiki/Planning_poker
[cognitive_bias]: https://en.wikipedia.org/wiki/Optimism_bias
[planning_fallacy]: https://en.wikipedia.org/wiki/Planning_fallacy
[thinking_fast_slow]: http://www.amazon.com/gp/product/0374533555
[willful_blindness]: https://www.brainpickings.org/2014/08/27/willful-blindness-margaret-heffernan/
[matt_griffin]: http://alistapart.com/column/creating-accurate-estimates