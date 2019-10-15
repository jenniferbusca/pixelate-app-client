import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pixel_logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="App-header">
    <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
    <NavLink to="/images" activeClassName="is-active">Images </NavLink>
  </header>
);

export default Header;
