---
title: Visualizing Wootric's massive data set.
tags: Front End (Angular), Back End (Rails), Data Visualization (D3)
client: Wootric
site: https://demo.wootric.com/
---


> “We came to Pavan when were completely rebuilding our SaaS analytics dashboard. That being said, his skill set is a good match for any project and size of company--he is the perfect combination of seasoned engineer, designer, and mentor that our young team needed. He took the time to understand our business and was able to immediately jump in and start improving code in all parts of our system. In addition to his full-stack experience, his knowledge of data visualization was invaluable. He worked extremely well with our team, providing mentorship and coaching without us prompting. The thing that sets Pavan apart from other freelance talent is that he is a pragmatist, always careful about the trade-off between progress, performance, and long-term maintainability--something that is absolutely critical for an early stage company. We would absolutely recommend Pavan & Gray Bike if you're looking for an experienced technical partner for your next project.”
>
> <cite>Deepa Subramanian, CEO of Wootric</cite>

[Wootric] is the Net Promoter Score® platform for boosting customer happiness. A Net Promoter Score is an index ranging from -100 to 100 that measures the willingness of customers to recommend a company's products or services to others. Wootric's flexible, data-driven platform gathers customer feedback in your web or mobile app, and lets you analyze NPS data by business drivers that are meaningful to you.

Wootric reached out to Gray Bike before embarking on a large rebuild of their analytics dashboard. In particular, they wanted help with the wrangling & displaying of their trends data. We were happy to dive into all levels of their stack to improve their code base and  bring their vision to life.

Prior to implementing the dashboard, we found lots of places in their code base to refactor and provide improvements. While we ramped up on their code, we worked closely their engineering team, mentoring them on Angular & D3 best practices, code structure, and development workflows.

Visualizing your NPS data is critical a to seeing a historical view of how you’re improving (or worsening) in the customer happiness department. Wootric’s customers collect thousands of data points every day, and have millions of historical responses in the database. Being able to crunch these numbers efficiently is vital to having a useful visualization of NPS trends. Before even starting on writing any front-end code, we worked with their engineers to design a smart caching system to efficiently deliver the massive amount of data to the front end visualizations.

<p class='case-study__image-display text-center'>
  <img src="/images/work/wootric/wootric-dashboard.jpg" width="100%">
  <span>The revamped trends tab that we built out for Wootric.</span>
</p>

We also worked closely with their design team to iterate on the UX of the trends tab. Making sure we handled all the edge cases, we built out a rock-solid, extensible front end system with D3 and Angular. What they were left with was a stable, well-tested front end system that allowed their customers much greater control over their data.

<video autoplay loop muted>
  <source src="/images/work/wootric/trends-demo-trimmed.webm" type="video/webm">
  <source src="/images/work/wootric/trends-demo-trimmed.mp4" type="video/mp4">
  <p class="case-study__alert text-center">Whoops! Here's where we'd show you a nice HTML5 video of the fancy new trends tab, but your browser doesn't seem to support it. Here is a <a href="/images/work/wootric/trends-demo-trimmed.mp4">link to the video</a> instead.</p>
</video>


Building out the new trends tab provided Wootric’s customers with insight into their NPS scores. Gray Bike was happy to provide its expertise and mentorship in this important time in Wootric’s growth.

[Wootric]: https://www.wootric.com/
