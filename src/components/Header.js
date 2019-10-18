import React from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import logo from '../pixel_logo.png';
import ImageUploader from './Images/ImageUploader'
import LogoutButton from './Users/LogoutButton'


const Header = (props) => {
  return (
    <header className="App-header">
      <Link to="/"><img src={logo} className="App-logo" alt="logo" /></Link>
      <NavLink to="/images/{id}">Images </NavLink>
      <NavLink to={props.history.location.pathname}>{<ImageUploader />}</NavLink>
      <NavLink to="/">{props.history.location.pathname  === "/" ? undefined : <LogoutButton />}</NavLink>
    </header>
  )
};

export default withRouter(Header);
