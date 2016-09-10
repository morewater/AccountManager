import React from 'react';
import { Link } from 'react-router';
import $ from "jquery";
import {Navbar, Nav, NavItem, NavDropdown, MenuItem, ProgressBar,Glyphicon} from "react-bootstrap";

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
                    fluid={true}  style={ {margin: 0} } >
<Navbar.Header   >
  <Navbar.Brand  >
    <a href="http://startreact.com/" title="Start React" rel="home">StartReact.com</a>
  </Navbar.Brand>
   <Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse >
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


    <div className="navbar-default sidebar" style={ { 'marginLeft': '-20px' } } role="navigation">
            <div className="sidebar-nav navbar-collapse">

              <ul className="nav in" id="side-menu">

                <li className="sidebar-search">
                  <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
                  </div>
                </li>

                <li>
                  <Link to="dashboard.home"><i className="fa fa-dashboard fa-fw"></i> &nbsp;Dashboard</Link>
                </li>

                <li className={classNames({'active': !this.state.chartsElementsCollapsed})}>
                  <a href="javascript:void(0)" onClick={ () => { this.setState({chartsElementsCollapsed: !this.state.chartsElementsCollapsed}); return false; } }>
                    <i className="fa fa-bar-chart-o fa-fw"></i> &nbsp;Charts<span className="fa arrow"></span>
                  </a>
                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.chartsElementsCollapsed})}>
                    <li>
                      <Link to="dashboard.flot-charts">Flot Charts</Link>
                    </li>
                    <li>
                      <Link to="dashboard.morrisjs-charts">Morris.js Charts</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="dashboard.tables"><i className="fa fa-table fa-fw"></i> &nbsp;Tables</Link>
                </li>

                <li>
                  <Link to="dashboard.forms"><i className="fa fa-edit fa-fw"></i> Forms</Link>
                </li>

                <li className={classNames({'active': !this.state.uiElementsCollapsed})}>
                  <a href="javascript:void(0)" onClick={ () => { this.setState({uiElementsCollapsed: !this.state.uiElementsCollapsed}); return false; } }><i className="fa fa-edit fa-fw"></i> UI Elements<span className="fa arrow"></span></a>

                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.uiElementsCollapsed})}>
                    <li>
                      <Link to="dashboard.panels-wells">Panels and Wells</Link>
                    </li>
                    <li>
                      <Link to="dashboard.buttons">Buttons</Link>
                    </li>
                    <li>
                      <Link to="dashboard.notifications">Notifications</Link>
                    </li>
                    <li>
                      <Link to="dashboard.typography">Typography</Link>
                    </li>
                    <li>
                      <Link to="dashboard.icons"> Icons</Link>
                    </li>
                    <li>
                      <Link to="dashboard.grid">Grid</Link>
                    </li>
                  </ul>
                </li>

                <li className={classNames({'active': !this.state.multiLevelDropdownCollapsed})}>
                  <a href="javascript:void(0)" onClick={ () => { this.setState({multiLevelDropdownCollapsed: !this.state.multiLevelDropdownCollapsed}); return false; } }>
                    <i className="fa fa-sitemap fa-fw"></i>&nbsp;Multi-Level Dropdown<span className="fa arrow"></span>
                  </a>
                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.multiLevelDropdownCollapsed})}>
                    <li>
                      <a href="javascript:void(0)">Second Level Item</a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Second Level Item</a>
                    </li>
                    <li className={classNames({'active': !this.state.thirdLevelDropdownCollapsed})}>
                      <a href="javascript:void(0)" onClick={ () => { this.setState({thirdLevelDropdownCollapsed: !this.state.thirdLevelDropdownCollapsed}); return false; } }>
                        Third Level<span className="fa arrow"></span>
                      </a>
                      <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.thirdLevelDropdownCollapsed})}>
                        <li>
                          <a href="javascript:void(0)">Third Level Item</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Third Level Item</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Third Level Item</a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">Third Level Item</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className={classNames({'active': !this.state.samplePagesCollapsed})}>
                  <a href="javascript:void(0)" onClick={ () => { this.setState({samplePagesCollapsed: !this.state.samplePagesCollapsed}); return false; } }>
                    <i className="fa fa-files-o fa-fw"></i>&nbsp;Sample Pages<span className="fa arrow"></span>
                  </a>
                  <ul className={classNames({'nav nav-second-level': true, 'collapse': this.state.samplePagesCollapsed})}>
                    <li>
                      <Link to="dashboard.blank">Blank Page</Link>
                    </li>
                    <li>
                      <Link to="login">Login Page</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="http://www.strapui.com/">Premium React Themes</a>
                </li>

              </ul>

            </div>
          </div>
          </Navbar.Collapse>
          </Navbar>


        </div>
    )
  }
});

export default Main;
