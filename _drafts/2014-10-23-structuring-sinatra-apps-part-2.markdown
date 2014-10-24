---
layout: post
title:  "Structuring Sinatra Apps, Part 2"
description: "A tutorial to set up a simple, structured Sinatra app template"
date:   2014-10-23 13:00:00
tags: sinatra bootstrap simple tutorial ruby
---

## Part 5: Models & Database

Alright. We've got our front end assets taken care of, a nice folder structure, and a route set up, it's time to add a database to our app. In this tutorial we're going to use a Postgres database (since that's what Heroku uses) and we'll use Sequel as our ORM. 

#### Gems

First, let's add a few things to our `Gemfile`:

{% highlight ruby %}
gem 'sequel'
gem 'sinatra-sequel'
gem 'pg'
{% endhighlight %}

#### User Model

Now let's create a User Model. First, create a file in the `/app/models` folder called `user.rb`. 

{% highlight ruby %}
module SinatraBootstrap
  module Models
    class User < Sequel::Model
    end
  end
emd
{% endhighlight %}

We're creating a simple `User` model that will inherit from `Sequel::Model`. This is how we'll interact with the databse. Now that we've got model defined, we need to actually import it into our main app. In the `/app` directory, create a file called `models.rb`. 

{% highlight ruby %}
module SinatraBootstrap
  module Models
    autoload :User, 'app/models/user'
  end
end
{% endhighlight %}

This is where you'll place the `autoload` command so `SinatraBootstrap` knows where to find the various models we're searching for.




#### Rakefile

## Part 6: Authentication