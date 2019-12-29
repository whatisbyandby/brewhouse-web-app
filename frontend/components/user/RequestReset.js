import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "../component-styles/Form";
import Error from "../ErrorMessage";
import { CURRENT_USER_QUERY } from "../user/User";
import Router from "next/router";

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: ""
  };

  handleOnChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <Mutation mutation={REQUEST_RESET_MUTATION}>
          {(requestReset, { loading, error }) => {
            return (
              <Form
                method="POST"
                onSubmit={async event => {
                  event.preventDefault();
                  await requestReset({ variables: this.state });
                  this.setState({ email: "" });
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
                  <button type="submit">Request Reset</button>
                </fieldset>
              </Form>
            );
          }}
        </Mutation>
      </div>
    );
  }
}

export default RequestReset;
