My Base Javascript Boilerplate
=========================

This is a hodgepodge of newer libraries that I use on most of my front end projects.
The directory structure and application structure is a bit biased and is something i've been tweaking
from project to project. I'd appreciate your feedback and am always willing to improve what I work with.


Adopted OpenSource Libraries/Frameworks
------------------

  - Backbone ('Backbone.js gives structure to web applications by providing
              models with key-value binding and custom events, collections
              with a rich API of enumerable functions, views with declarative
              event handling, and connects it all to your existing API over a
              RESTful JSON interface.' - http://backbonejs.org/)

  - Backbone.Marionette
    - 'a composite application library for Backbone.js that aims to simplify the construction
      of large scale JavaScript applications.' - https://github.com/derickbailey/backbone.marionette)

  - Jasmine
    - ('a behavior-driven development framework for testing JavaScript code.'
       -https://jasmine.github.io/)

  - jQuery
    - ('a fast and concise JavaScript Library that simplifies HTML document traversing,
       event handling, animating, and Ajax interactions' - http://jquery.com)

  - RequireJS
    - ('a javaScript file and module loader' - http://requirejs.org/)

  - Sass
    - ('makes CSS fun again. Sass is an extension of CSS3, adding nested rules, variables,
       mixins, selector inheritance, and more. - http://sass-lang.com/)


Directory Structure
-------------------

      .
      ├── .gitignore
      ├── grunt.js
      ├── README.md
      ├── LICENSE.md
      │
      ├── assets
      │   ├── ico
      │   └── img
      ├── public
      │   ├── humans.txt
      │   ├── index.html
      │   ├── doc
      │   ├── js
      │   │   ├── main.js
      │   │   ├── collections
      │   │   │   └── <CollectionName>.js
      │   │   ├── core
      │   │   │   ├── BaseCollection.js
      │   │   │   ├── BaseModel.js
      │   │   │   └── config.js
      │   │   ├── models
      │   │   │   └── <ModelName>.js
      │   │   │── vendor
      │   │   │   ├── backbone-<*>.js
      │   │   │   ├── backbone.marionette-<*>.js
      │   │   │   ├── underscore-<*>.js
      │   │   │   ├── jquery-<*>.js
      │   │   │   ├── tpl.js
      │   │   │   └── require-<*>.js
      │   │   └── viewports
      │   │   │   └── desktop
      │   │   │       ├── application.js
      │   │   │       └── router.js
      │   │   └── views
      │   ├── css
      │   │   ├── bootstrap.css
      │   │   └── main.scss
      │   └── templates
      └── test
          ├── index.html
          ├── jasmin
          │   ├── jasmine-html.js
          │   ├── jasmine-css.js
          │   └── jasmine.js
          └── spec
              └── <specController>.js
