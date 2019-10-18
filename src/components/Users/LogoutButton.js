import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/loginActions';

class LogoutButton extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.logout();
    this.props.history.push("/");
  }

  render() {
    return (
      <button
        onClick={(e) => this.handleSubmit(e)}>
        Log out
      </button>
    )
  }
}

export default connect(
state => ({
  user: state.loginReducer.user,
  error: state.loginReducer.error
}), { logout })(withRouter(LogoutButton));
