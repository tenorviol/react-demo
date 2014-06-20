/** @jsx React.DOM */

var React = require('react');
var AphorismView = require('./AphorismView');

module.exports = React.createClass({
  render: function() {
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Aphorisms</title>
          <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
        </head>
        <body>
          <AphorismView aphorism={this.props.aphorism} />

          <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
          <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        </body>
      </html>
    );
  }
});
