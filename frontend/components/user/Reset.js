import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../component-styles/Form";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../components/User";
import Router from "next/router";

const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      name
      email
    }
  }
`;

class Reset extends Component {
  state = {
    password: "",
    confirmPassword: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Mutation
          mutation={RESET_MUTATION}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(resetMutation, { loading, error }) => {
            return (
              <Form
                method="POST"
                onSubmit={async event => {
                  event.preventDefault();
                  await resetMutation({
                    variables: {
                      resetToken: this.props.resetToken,
                      password: this.state.password,
                      confirmPassword: this.state.confirmPassword
                    }
                  });
                  this.setState({ password: "", confirmPassword: "" });
                  Router.push({ pathname: "/" });
                }}
              >
                <fieldset disabled={loading} aria-busy={loading}>
                  <Error error={error} />
                  <label htmlFor="password">
                    Password
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label htmlFor="confirmPassword">
                    Confirm Your Password
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={this.state.confirmPassword}
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <button type="submit">Reset Your Password</button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default Reset;
