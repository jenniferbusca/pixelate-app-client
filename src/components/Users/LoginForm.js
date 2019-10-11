import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password, this.props.history);
  }

  render() {
    return (
      <form name="loginForm" onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" onChange={e => this.setState({email: e.target.value})} value={this.state.email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input type="password" name="password" onChange={e => this.setState({password: e.target.value})} value={this.state.password}/>
          </div>
        </div>

        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default connect(state => ({ email: state.email, password: state.password }), { login })(withRouter(LoginForm));
