import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "../components/styles/Form";
import Error from "../components/ErrorMessage";
import { CURRENT_USER_QUERY } from "../components/User";

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      name
      email
    }
  }
`;

class Signup extends Component {
  state = {
    email: "",
    name: "",
    password: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Mutation
        mutation={SIGNUP_MUTATION}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signupMutation, { loading, error }) => {
          return (
            <Form
              method="POST"
              onSubmit={async event => {
                event.preventDefault();
                await signupMutation({ variables: this.state });
                this.setState({ email: "", name: "", password: "" });
                Router.push({ pathname: "/" });
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
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={this.state.name}
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
                <button type="submit">Sign Up</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signup;
