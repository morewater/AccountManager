import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar} from "react-bootstrap";

import classNames from "classnames";


const Main = React.createClass({


componentWillMount: function() {
  this.setState({Height: $(window).height()});
},

componentDidMount: function() {

},

componentWillUnmount: function(){

  $(window).unbind('resize',this.adjustResize);

},

getInitialState: function(){

  return {
    uiElementsCollapsed: true,
    chartsElementsCollapsed: true,
    multiLevelDropdownCollapsed: true,
    thirdLevelDropdownCollapsed: true,
    samplePagesCollapsed: true
  };

},

  toggleMenu: function(){
    if($(".navbar-collapse").hasClass('collapse')){
      $(".navbar-collapse").removeClass('collapse');
    }
    else{
      $(".navbar-collapse").addClass('collapse');
    }
  },

  render() {
    const title =<i className="fa fa-envelope fa-fw"></i>;
    return (
      <div id="wrapper" className="content">

          <Navbar

            >
            <Navbar.Header >
  <Navbar.Brand  >
    <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a>
  </Navbar.Brand>
</Navbar.Header>
<Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title={title} id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>


          </Navbar>


        </div>
    )
  }
});

export default Main;
