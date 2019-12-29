import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../component-styles/Form";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";
import Router from "next/router";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Mutation
          mutation={SIGNIN_MUTATION}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(signinMutation, { loading, error }) => {
            return (
              <Form
                method="POST"
                onSubmit={async event => {
                  event.preventDefault();
                  await signinMutation({ variables: this.state });
                  this.setState({ email: "", password: "" });
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <Error error={error} />
                  <label htmlFor="email">
                    Email
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label htmlFor="email">
                    Password
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <button type="submit">Sign In</button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Signin;
