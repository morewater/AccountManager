var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');

var LogoutPage = React.createClass({

  componentWillMount: function(){

  },

  mixins: [Router.Navigation],

  render: function(){
console.log('log out render');
  		return <div></div>;
  }

});

export default LogoutPage;
