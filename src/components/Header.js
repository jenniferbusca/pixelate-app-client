import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../pixel_logo.png';
import { Nav, NavbarBrand } from 'reactstrap';
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <Nav className="App-header" expand="md">
      <NavbarBrand><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
        {props.history.location.pathname  === "/" ? undefined : <Navigation />}
    </Nav>
  );
}

export default withRouter(Header);
