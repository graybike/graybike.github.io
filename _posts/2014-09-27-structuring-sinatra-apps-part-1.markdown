---
layout: post
title:  "Structuring Sinatra Apps, Part 1"
description: "Part 1 of a tutorial to set up a simple, structured Sinatra app"
date:   2014-09-27 13:00:00
tags: sinatra bootstrap simple tutorial ruby
---

For some time now I've been using [Sinatra](http://sinatrarb.com) to build Ruby apps as I've taught myself the language and implemented simple websites / apps for clients. I love it's simpllicity and it's very powerful if you're up for a little digging and coding. Highly configurable, without the bloat of Rails. It's also a great way to learn about all sorts of ruby / web development tools, which makes eventually learning Rails much easier.

This blog post & app was inpsired by (and built upon) two things: Alex Mccaw's [excellent post on Structuring Sinatra Applications](http://blog.sourcing.io/structuring-sinatra), and Adam Stacoviak's [Sinatra Bootstrap](https://github.com/adamstac/sinatra-bootstrap). At one point, I [made a few modifications](https://github.com/ptrikutam/sinatra-bootstrap) to Adam's project, but never really expanded on it that much.

Since there was a lot of code in both Alex's and Adam's project I didn't completely understand, I've attempted to build out a new one with stuff I need in my projects. I'm going to go through my process here for creating this bootstrap, and will attempt to explain as much of the configuration & code as possible to make it easy for newcomers.

*In Part 1 of this tutorial, we're going to set up our base project & file structure. Then we'll add some routes & views.  Finally, we'll set up the developer tools (Grunt, Sass, etc) to speed up development.*

## The Project

You can find the final, fully coded up Sinatra Bootstrap project here: [Sinatra Bootstrap](https://github.com/graybike/sinatrabootstrap).

#### Ingredients

There were a number of things I wanted to include in this project. I've listed them below, but if you're not interested in any of this and just want to get to the tutorial, just jump to [Setting up the project](#setting-up-the-base-project).

* Has a simple, modular, and manageable file structure for routes, models, etc.
* Uses [Haml](http://haml.info/) for view templating.
* Uses [Sass](http://sass-lang.com/) for CSS preprocessing.
* Uses [Bourbon](http://bourbon.io/) for some sweet Sass mixins.
* Uses [Heroku](http://heroku.com/) for hosting / infrastructure
* Uses [Sequel](https://github.com/jeremyevans/sequel) and PostgreSQL for database management.
* Manages front end asset stuff with [Grunt](http://gruntjs.com/).

## Prerequisites

You'll want to get these set up before we begin:

* Ruby 
* [Node](http://nodejs.org/)
* The Bundler gem (run `gem install bundler`)
* The [Heroku Toolbelt](https://toolbelt.heroku.com/). 
* PostgreSQL. I use [Postgres.app](http://postgresapp.com/).

## Setting up the base project

#### The App
Let's start small. First, let's set up a simple Sinatra app. We'll start by creating a Gemfile for Bundler to use to import stuff.

{% highlight ruby %}
source "https://rubygems.org"
ruby '2.0.0'

gem 'sinatra', require: 'sinatra/base'
gem 'haml'
gem 'shotgun'
{% endhighlight %}  

Install the gems by running `bundle install`. Now that you've got a nice little environment set up, set up your actual Sinatra app file. Create a file named `app.rb` in the same directory.

{% highlight ruby %}
require 'rubygems'
require 'bundler'

Bundler.require

module SinatraBootstrap
  class App < Sinatra::Application
    configure do
      disable :method_override
      disable :static
    end

    use Rack::Deflater
  end
end
{% endhighlight %}

The first 4 lines tell Sinatra to use the Gemfile to load any necessary gems for this project. After that, we use the [Modular style](http://www.sinatrarb.com/intro.html#Modular%20vs.%20Classic%20Style) to set up our app. Within the `configure` block, we're doing 2 things: [disabling the POST `_method` hack](http://www.sinatrarb.com/configuration.html#methodoverride---enabledisable-the-post-method-hack) and disabling [static file routes](http://www.sinatrarb.com/configuration.html#static---enabledisable-static-file-routes). Lastly, we're using the [Rack::Deflater](http://rubydoc.info/github/rack/rack/master/Rack/Deflater) middleware to compress our server's responses at runtime. You can read more about why this is important [here](http://robots.thoughtbot.com/content-compression-with-rack-deflater).


#### Rack & Heroku

Let's add a `config.ru` file so we can use this with rack. 

{% highlight ruby %}
require './app'

run SinatraBootstrap::App
{% endhighlight %}

Now, you can run your app by running `rackup config.ru`. Let's take this a step further and set this app up so we can easily deploy it on Heroku. Doing this is simple enough -- we just need to create a Procfile. In your root directory, create a file called Procfile:

{% highlight ruby %}
web: bundle exec rackup config.ru -p $PORT
{% endhighlight %}

Essentially this will do the same thing as running `rackup config.ru`. However, now you can run your app with `foreman start`. If you want to find out more Procfiles and while they're important, check out [Heroku's article on it](https://devcenter.heroku.com/articles/procfile).

By default, foreman runs on port 5000, so when you hit [localhost:5000](http://localhost:5000/) you'll find Sinatra will complain that it doesn't know the route you're trying to access.

This is fine for now, we'll add that route later once we've got a proper file structure set up.

This is probably the point where you want to initialize the git repository & start incrementally committing stuff. You can use this sample [.gitignore](https://raw.githubusercontent.com/graybike/sinatrabootstrap/master/.gitignore) file if you'd like.

## Part 2: Setting up the file structure

Let's go over the file structure we're going to set up for this project. Here's what the full file structure looks like:

{% highlight text %}
app/
  assets/
    javascripts/
      libs/
    stylesheets/
  models/
  routes/
  views/
  models.rb
  routes.rb
db/
  migrations/
public/
  javascripts/
  stylesheets/
  images/
app.rb
config.ru
Gemfile
Gemfile.lock
Gruntfile.js
package.json
Procfile
Rakefile
{% endhighlight %}

Don't worry too much if you don't have all the files here. We'll add them piece by piece as we go along.

From the root folder, create an `app/` folder, and under it, create an `assets`, `models`, `routes`, `views` folder. Under `assets`, create a `javascripts` and `stylesheets` folder. We're creating this to be similar to the MVC style file structure of Rails, Django, etc.

While you're at it, create a `db` and `public` folder in your root directory. In your `public` folder, create a `stylesheets` and `javascripts` folder as well. This is where your compiled & minified CSS & JavaScript will go.

## Part 3: Routes

Before we can add a route, we have to make sure that the current directory is in the app's load path. That's because we use `autoload` to load our models, routes, etc. You can see Alex's commentary on using `autoload` in his [blog post](http://blog.sourcing.io/structuring-sinatra). Add this to your `app.rb`:

{% highlight ruby %}
$: << File.expand_path('../', __FILE__)
{% endhighlight %}

## TODO

Once you've done this, we can create our first route. I can't really put it better than Alex did, so I'm going to quote him directly here: 

> So our application has one main route: `App`. If we want to go about creating another route, we just need to mount it on `App`. Essentially, each route is its own separate application. For example, we could have a `Posts` route under `app/routes/posts.rb` (routes are always plural).

## End TODO

#### Routes module

First, we'll need to create a `Routes` module that we can use to manage the loading of routes. Under the `app` directory, create a file called `routes.rb`

{% highlight ruby %}
module SinatraBootstrap
  module Routes

  end
end
{% endhighlight %}

This is the module that will manage the autoloading the routes as you need them. Make sure to include it in your `app.rb` so your main app knows where to find this module. Add the following line to `app.rb`:

{% highlight ruby %}
require 'app/routes'
{% endhighlight %}

#### Our first route

Let's create a `Base` route so that we can have all our other routes inherit from that. The idea here is that we can create logic shared by all routes in the `Base` route (for example, authentication).

Create the file `/apps/routes/base.rb`:

{% highlight ruby %}
module SinatraBootstrap
  module Routes
    class Base < Sinatra::Application
      configure do
        set :views, 'app/views' # Tell Sinatra where the views are kept.
        set :root, App.root     # Tell Sinatra where your route's current working directory is.
      end
    end
  end
end
{% endhighlight %}

Basically, we're just creating another application within the `Routes` module for the `Base` route. In the `configure` block, we're making sure that the route will know where to find views, and sets the app's root directory.

After this, let's create an actual route that we'll use. Borrowing from [Monocle's](https://github.com/maccman/monocle) structure, create the file `app/routes/client.rb`:

{% highlight ruby %}
module SinatraBootstrap
  module Routes
    class Client < Base
      
      get '/' do
        haml :index
      end

    end
  end
end
{% endhighlight %}

This file inherits from `Base`, as we discussed earlier. Let's also make a simple view file called `index.haml` in `app/views/`

{% highlight haml %}
!!!
%html
  %body
    %h1 Welcome to Sinatra Bootstrap.
    %h3 A more structured approach to Sinatra Applications.
{% endhighlight %}

Feel free to beef up this view if you like. Now that we've added both these routes, and a view, we need to tell the `Routes` module where to find them. Add the following lines to `app/routes.rb`

{% highlight ruby %}
autoload :Base, 'app/routes/base'
autoload :Client, 'app/routes/client'
{% endhighlight %}

Lastly, we need to include the `Client` route our main `App` so we can finally see the page we created. Add the following line to your `app.rb` after the `use Rack::Deflater` line:

{% highlight ruby %}
use SinatraBootstrap::Routes::Client
{% endhighlight %}

Now we're all set with our first route! Awesome. If you restart your server and hit [http://localhost:5000](http://localhost:5000), you should see the little view we just created.

I know this seems like a lot of work to create a simple view, but it's great because now we have an extremely modular design that we can rely on to grow a complex app. If we had done things in the classic style (keeping everything in `app.rb`), our application would quickly get unwieldy to manage or scale.

## Part 4: Front End Tools


#### Grunt

If you've made it this far, great job! Let's add some front end tools to make our development even easier. First, let's set up Grunt. If you've never used Grunt before, Chris Coyier has written a [great introduction to it](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

I'll let you go through that tutorial to learn the ins & outs since Chris explains it better than I can. For the purpose of this tutorial, know that I followed that one to add JavaScript concatenation, JavaScript uglification, Sass, Bourbon, and added a watch task so we can have our assets compile nice and automatically when we update them.

Create a file called `package.json` in your root directory:

{% highlight json %}
{
  "name": "sinatrabootstrap",
  "version": "0.0.1",
  "description": "A simple, structured Sinatra app template",
  "author": "Pavan Trikutam",
  "devDependencies": {
    "grunt": "^0.4.5",
    "grunt-contrib-concat": "^0.5.0",
    "grunt-contrib-sass": "^0.8.1",
    "node-bourbon": "~1.0.0",
    "grunt-contrib-uglify": "^0.6.0",
    "grunt-contrib-watch": "^0.6.1"
  }
}
{% endhighlight %}

From here, run `npm install`. This will install the needed modules for the tools above as needed. Please note you'll need Sass installed on your system -- run `gem install sass` if you haven't already gotten it set up.


From here, you'll need a Gruntfile. create a file called `Gruntfile.js` in your root directory as well. You can [use the one I've put up on Github gists](https://gist.github.com/ptrikutam/f0b91bfa505740aadf4b).

If you follow Chris's tutorial, much of this should look familiar. The only thing that might look unfamiliar is the line that reads `loadPath: require('node-bourbon').includePaths,`. I added that in based on the advice in this [blog post](http://syropia.net/journal/how-to-use-bourbon-with-gruntjs). Basically, it's a quick & dirty way to add in Bourbon to your project.

#### Sass & JS

Go ahead and create a Sass file in `app/assets/stylesheets/` called `application.scss`. The filename & location is important here since Grunt is specifically looking for a file with that name. At the outset, this is all I included in my application.scss:

{% highlight css %}
@import "bourbon";
{% endhighlight %}

Once this is set up, run the `grunt` command from your root directory. You should see some output and see some auto-generated files in your `public/` directory, namely: `public/javascripts/app.js`, `public/javascripts/app.min.js`, and `public/stylesheets/application.css`. If you want to have Grunt watch your directory while you're doing development, run the `grunt watch` command. It'll update the generated files anytime you make a change to your JavaScript or Sass files.

A quick note -- if you've got JavaScript libraries that you want to use like jQuery or Bootstrap's JS files, you should keep them in `app/assets/javascripts/libs/`. Our Gruntfile knows to look in that directory and will automatically uglify & concatenate that JavaScript for you.

#### Views & Layouts

Odds are that you'll have view elements & components that you'll want to share across all pages (headers, footers, etc). Doing this is really simple. Create a file called `layout.haml` in `app/views/`:

{% highlight haml %}
!!!

%html{:lang => "en"}
  %head
    %meta{:charset => "UTF-8"}
    / Title and description
    %title Sinatra Bootstrap
    / Favicon
    %link{:href => "/favicon.ico", :rel => "icon", :type => "image/ico"}
    %link{:href => "stylesheets/application.css", :media => "all", :rel => "stylesheet", :type => "text/css"}
  %body
    =yield
{% endhighlight %}

What this does is any other view you render using Haml will use this file as the wrapper, and insert the specific view's content into the section where it says `=yield`. That way you have a shared head element among all your views.

Since we made this change, we should change the `app/views/index.haml` file to be: 

{% highlight haml %}
%h1 Welcome to Sinatra Bootstrap.
%h3 A more structured approach to Sinatra Applications.
{% endhighlight %}

Now whenever you create a new view all you need to worry about is the content of the view itself, and not having to re-setup all the metadata / includes / etc that you have in your `head` element.

