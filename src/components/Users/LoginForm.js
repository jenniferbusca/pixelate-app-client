import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: ''
      },
      error: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state.user, this.props.history);
    this.setState({error: this.props.error });
  }

  handleErrors = (errors) => {
    return(
      <ul className="errors">
        {Object.entries(errors).map((k, v) =>
          <li key={k}>{k}</li>)}
      </ul>
    )
  }

  render() {
    return (
      <form name="loginForm" onSubmit={(event) => this.handleSubmit(event)}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={e => this.setState({
                user: { ...this.state.user, email: e.target.value} })}
              value={this.state.email}/>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={e => this.setState({
                user: { ...this.state.user, password: e.target.value} })}
              value={this.state.password}/>
          </div>
        </div>
        <input type="submit" value="Login" />
         <div>{this.state.error ? this.handleErrors(this.props.error) : null }</div>
      </form>
    )
  }
}

export default connect(
  state => ({
    user: state.loginReducer.user,
    error: state.loginReducer.error
  }), { login })(LoginForm);
