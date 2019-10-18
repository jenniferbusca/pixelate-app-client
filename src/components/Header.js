import React from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../pixel_logo.png';
import { Navbar, NavbarBrand } from 'reactstrap';
import Navigation from './Navigation'

const Header = (props) => {
  return (
    <Navbar className="App-header" light expand="md">
      <NavbarBrand href="/"><img src={logo} className="App-logo" alt="logo" /></NavbarBrand>
        {props.history.location.pathname  === "/" ? undefined : <Navigation />}
    </Navbar>
  );
}

export default withRouter(Header);
