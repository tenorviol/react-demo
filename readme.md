react demo
==========

Goal: Use [react](http://facebook.github.io/react/)
for rendering html on both the server and the client.

In this demo,
we will randomly select an aphorism and display it in a web page.
I've copied a long list of aphorisms into
[src/aphorism.js](src/aphorism.js),
and created the function `getRandom()`.
Test this out by running from the command line:

    ./bin/random-aphorism.js

Use npm to install react, react tools, express, supervisor and watchify.

    npm install --save react react-tools express supervisor watchify

React templates can be written in the jsx language,
which mixes html-esque xml and javascript.
Jsx templates must begin with the line `/** @jsx React.DOM */`,
or the jsx pre-compiler will assume it is javascript and leave it unchanged.
Each template is created with a call to `React.createClass`.
The example [jsx/AphorismView.js](jsx/AphorismView.js), shown below,
inserts a single property element as text into the div.
Meanwhile the example [jsx/IndexView.js](jsx/IndexView.js) composes AphorismView into itself.

    /** @jsx React.DOM */

    var React = require('react');

    module.exports = React.createClass({
      render: function() {
        return (
          <div className="jumbotron">
            {this.props.aphorism}
          </div>
        );
      }
    });

Jsx templates can be compiled into javascript using the command line tool, jsx.
With the `--watch` directive,
jsx will run each time a file is changed in the source directory.

    ./node_modules/.bin/jsx --watch jsx template

Templates can be rendered server side using `React.renderComponentToString(View(properties))`.
Run the server using supervisor so it will pick up any changes we make to our code,
and check out the result at [localhost:3000](http://localhost:3000/).

    ./node_modules/.bin/supervisor src/server.js

If we're going to run our react code client side,
we will need to get the javascript code client side as well.
We'll use browserify to package up the necessary code into a single javascript file.

    mkdir public/js
    ./node_modules/.bin/watchify src/client.js -o public/js/client.js

Once the application has been reloaded with this client.js file,
you will be able to output new aphorisms from the console with:

    showNewAphorism()

