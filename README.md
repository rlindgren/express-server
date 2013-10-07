# Simple Express Web Server

## Overview

This web server is written in Javascript with [ExpressJS](http://www.expressjs.com/).
The base directory is the `public` directory.  All relative paths used within served documents will be resolved to this directory.

`index.html` serves as a, kind of, very basic introduction to client-side javascript, HTML, and CSS, with the inclusion of some very neat code from the collection of [Mike Bostock](https://github.com/mbostock).

## Prerequisites

### Node.js
- Install [Node.js](http://www.nodejs.org). Follow instructions on their site.
- For Windows: you will also need [7 Zip] to unzip the node archive.
  (and don't forget to add `node.exe` to your executable path)

## Server Set-up

    git clone https://github.com/tathata/express-server.git && cd express-server
    npm install

### Running the App During Development

1. `npm start` launches the server and starts it listening on port 8000.
2. navigate your browser to `http://localhost:8000/`.

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
      bower.json                  --> manage front-end dependencies with [Bower](http://www.bower.io)
      express-config.js           --> configuration for Express
      express-routes.js           --> application routes definitions
      express-server.js           --> our server
      package.json                --> package.json (all node packages have one)
      Procfile                    --> Procfile (push your app to [heroku](http://www.heroku.com))
      README.md                   --> the document you are currently reading....

This documentation is a 'bare minimum' implementation... sorry if it's not sufficient.
