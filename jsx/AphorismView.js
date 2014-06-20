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
