import React, { Component } from "react";
import Form from "../components/styles/Form";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import Router from "next/router";
import Error from "../components/ErrorMessage";

const SINGLE_RECIPE_QUERY = gql`
  query SINGLE_RECIPE_QUERY($id: ID!) {
    recipe(where: { id: $id }) {
      id
      name
      type
      style
      batchSize
    }
  }
`;

const UPDATE_RECIPE_MUTATION = gql`
  mutation UPDATE_RECIPE_MUTATION(
    $id: ID!
    $name: String
    $type: RecipeType
    $style: String
    $batchSize: Float
  ) {
    updateRecipe(
      id: $id
      name: $name
      type: $type
      style: $style
      batchSize: $batchSize
    ) {
      id
      name
      type
      style
      batchSize
    }
  }
`;

class UpdateRecipe extends Component {
  state = {};

  handleOnChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateRecipe = async (event, updateRecipeMutation) => {
    event.preventDefault();
    const res = await updateRecipeMutation({
      variables: { id: this.props.id, ...this.state }
    });
    Router.push({ pathname: "/recipe" });
  };

  render() {
    return (
      <Query query={SINGLE_RECIPE_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading }) => {
          return (
            <Mutation mutation={UPDATE_RECIPE_MUTATION}>
              {(UpdateRecipeMutation, { error, loading }) => (
                <Form
                  onSubmit={event =>
                    this.updateRecipe(event, UpdateRecipeMutation)
                  }
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        id="name"
                        name="name"
                        defaultValue={data.recipe.name}
                        placeholder="Recipe Name"
                        required
                        onChange={this.handleOnChange}
                      />
                    </label>
                    <label htmlFor="name">
                      Type
                      <select
                        id="type"
                        name="type"
                        defaultValue={data.recipe.type}
                        onChange={this.handleOnChange}
                        required
                      >
                        <option value=""></option>
                        <option value={"ALL_GRAIN"}>ALL GRAIN</option>
                        <option value={"EXTRACT"}>EXTRACT</option>
                        <option value={"PARTIAL_MASH"}>PARTIAL MASH</option>
                        <option value={"MEAD"}>MEAD</option>
                      </select>
                    </label>
                    <label htmlFor="style">
                      Style
                      <input
                        type="text"
                        id="style"
                        name="style"
                        defaultValue={data.recipe.style}
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
                        defaultValue={data.recipe.batchSize}
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
        }}
      </Query>
    );
  }
}

export default UpdateRecipe;
