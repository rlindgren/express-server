# Simple Express Web Server

## Overview

This web server is written in Javascript with [ExpressJS](http://www.expressjs.com/).
The base directory is the `public` directory.  All relative paths used within served documents will be resolved to this directory.

## Prerequisites

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

## Server Set-up

- When you clone the repository, navigate to the newly created directory and run `npm install` command.
- You may need to run `bower install` as well, if it was not run automatically after `npm install`.
  -- Check whether or not there is a `d3` folder inside of `public/lib`. If not, run `bower install`.

### Running the App During Development

1. run `npm start` to launch the server and listen on port 8000
2. navigate your browser to `http://localhost:8000/` to see the result of serving the index page (index.html).

## Application Directory Layout

    public/                       --> all of the files to be served
      css/                        --> css files
        application.css           --> default stylesheet
      img/                        --> image files
      index.html                  --> app layout file (the main html template file of the app)
      js/                         --> javascript files
        application.js            --> application javascripts
      lib/                        --> 3rd party javascript libraries and CSS bootstrap
        bootstrap/
          dist/
            css/
              bootstrap.min.css   --> bootstrap CSS
            js/
              bootstrap.min.js    --> bootstrap Javascript
            fonts/                --> glyphicons
        d3/
          d3.js                   --> the latest d3 js
          d3.min.js               --> the latest minified d3 js
        jquery/
          jquery.js               --> the latest jquery js
          jquery.min.js           --> the latest minified jquery js
        underscore/
          underscore.js           --> the latest underscore js
          underscore.min.js       --> the latest minified underscore js
        html5shiv.js              --> loaded by <=IE8
      .bowerrc                    --> config tells Bower where to put downloaded dependencies
      .gitignore                  --> tell git to ignore some files
      bower.json                  --> manage our front-end dependencies with [Bower](http://www.bower.io)
      express-config.js           --> configuration for Express
      express-routes.js           --> application routes definitions
      express-server.js           --> our server
      package.json                --> package.json (all node packages have one)
      Procfile                    --> Procfile (so you can push your app to [heroku](http://www.heroku.com))
      README.md                   --> the document you are currently reading....

This documentation is a 'bare minimum' implementation... sorry if it's not sufficient.