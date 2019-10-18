import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/loginActions'
import { Alert, Container, Row, Col, Button, Form, FormGroup, Card, CardBody } from 'reactstrap';

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
      <Container>
        <Row>
          <Col>
            {this.state.error ? <Alert color="secondary">{this.handleErrors(this.props.error)}</Alert> : null }
            <Card className="login-form">
              <CardBody>
                <Form name="loginForm" onSubmit={(event) => this.handleSubmit(event)}>
                  <FormGroup>
                    <label>Email</label>
                    <input
                      className="form-control"
                      placeholder="Enter email to login or sign-up"
                      type="email"
                      name="email"
                      onChange={e => this.setState({
                        user: { ...this.state.user, email: e.target.value} })}
                      value={this.state.email}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                  </FormGroup>

                  <FormGroup>
                    <label>Password</label>
                    <input
                      className="form-control"
                      placeholder="Password"
                      type="password"
                      name="password"
                      onChange={e => this.setState({
                        user: { ...this.state.user, password: e.target.value} })}
                      value={this.state.password}/>
                  </FormGroup>
                 <Button type="submit" className="btn btn-primary">Submit</Button>
               </Form>
             </CardBody>
           </Card>
         </Col>
       </Row>
    </Container>
    )
  }
}

export default connect(
  state => ({
    user: state.loginReducer.user,
    error: state.loginReducer.error
  }), { login })(LoginForm);
