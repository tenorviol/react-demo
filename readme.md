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
