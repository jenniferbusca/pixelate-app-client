import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageUploader from './Images/ImageUploader'
import LogoutButton from './Users/LogoutButton'
import { Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = (props) => {
  return (
    <Nav>
      <NavItem>
        <NavLink to={props.history.location.pathname}>{<ImageUploader />}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">{<LogoutButton />}</NavLink>
      </NavItem>
    </Nav>
  );
}

export default withRouter(Navigation);
