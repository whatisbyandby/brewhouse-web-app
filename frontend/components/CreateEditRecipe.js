import React, { Component } from "react";
import Form from "../components/styles/Form";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Router from "next/router";
import Error from "../components/ErrorMessage";

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $name: String!
    $style: String!
    $batchSize: Float!
  ) {
    createRecipe(name: $name, style: $style, batchSize: $batchSize) {
      id
    }
  }
`;

class CreateEditRecipe extends Component {
  state = {
    name: "",
    style: "",
    batchSize: 27
  };

  componentDidMount() {
    console.log(this.props);
    this.setState(this.props);
  }

  handleOnChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation mutation={CREATE_RECIPE_MUTATION} variables={this.state}>
        {(createRecipe, { error, loading }) => (
          <Form
            onSubmit={event => {
              event.preventDefault();
              createRecipe();
              Router.push({ pathname: "/recipes" });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="name">
                Name
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={this.state.name}
                  placeholder="Recipe Name"
                  required
                  onChange={this.handleOnChange}
                />
              </label>
              <label htmlFor="style">
                Style
                <input
                  type="text"
                  id="style"
                  name="style"
                  value={this.state.style}
                  placeholder="Recipe Style"
                  required
                  onChange={this.handleOnChange}
                />
              </label>
              <label htmlFor="batchSize">
                Batch Size
                <input
                  type="number"
                  id="batchSize"
                  name="batchSize"
                  value={this.state.batchSize}
                  placeholder="Recipe Name"
                  required
                  onChange={this.handleOnChange}
                />
              </label>
              <button type="submit">Save Recipe</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateEditRecipe;
