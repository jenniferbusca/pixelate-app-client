import React from 'react';
import { withRouter } from 'react-router-dom';
import ImageUploader from './Images/ImageUploader'
import LogoutButton from './Users/LogoutButton'
import { Nav, NavItem, NavLink} from 'reactstrap';

const Navigation = (props) => {
  return (
    <div>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to={props.history.location.pathname}>{<ImageUploader />}</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">{<LogoutButton />}</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default withRouter(Navigation);
