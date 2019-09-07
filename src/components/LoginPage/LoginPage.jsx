import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

import Input from "./Input";
import validate from "./validation";

import { connect } from "react-redux";
import { login } from "../../actions";

styleObject = {
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  justifyContent: "center"
};

class Login extends Component {
  onSubmit = formValues => {
    this.props.login(formValues);
  };

  render() {
    return (
      <div className="container" style={this.styleObject}>
        <div className="card m-5">
          <div className="card-body">
            <h1 className="text-center font-weight-light">Login</h1>
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
              <Field
                name="email"
                component={Input}
                label="Email"
                placeholder="Enter Email"
                type="text"
              />
              <Field
                name="password"
                component={Input}
                label="Password"
                placeholder="Enter Password"
                type="password"
              />

              <div className="text-center">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const bindForm = reduxForm({ form: "loginForm", validate })(Login);

export default connect(
  null,
  { login }
)(bindForm);
