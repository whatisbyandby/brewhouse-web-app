import React, { Component } from "react";
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import Router from "next/router";
import Error from "../ErrorMessage";
import RecipeForm from "../component-styles/RecipeForm";
import StyleSelect from "../style/StyleSelect";
import { ALL_RECIPES_QUERY } from "./RecipeGrid";

const CREATE_RECIPE_MUTATION = gql`
  mutation CREATE_RECIPE_MUTATION(
    $name: String!
    $type: RecipeType!
    $style: String!
    $batchSize: Float!
  ) {
    createRecipe(
      name: $name
      type: $type
      style: $style
      batchSize: $batchSize
    ) {
      id
      name
      type
      style {
        name
      }
      batchSize
      estimatedOG
      estimatedFG
    }
  }
`;

class CreateRecipe extends Component {
  state = {
    name: "",
    style: "",
    type: "",
    batchSize: 27
  };

  handleOnChange = event => {
    const { name, type, value } = event.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <Mutation
        mutation={CREATE_RECIPE_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: ALL_RECIPES_QUERY }]}
      >
        {(createRecipe, { error, loading }) => (
          <RecipeForm
            onSubmit={async event => {
              event.preventDefault();
              const res = await createRecipe();
              if (!error) {
                Router.push({ pathname: "/recipe" });
              }
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
              <label htmlFor="name">
                Type
                <select
                  id="type"
                  name="type"
                  value={this.state.type}
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
              <StyleSelect
                value={this.state.style}
                onChange={this.handleOnChange}
              />
              <label htmlFor="batchSize">
                Batch Size
                <input
                  type="number"
                  id="batchSize"
                  name="batchSize"
                  value={this.state.batchSize}
                  placeholder="Batch Size"
                  required
                  onChange={this.handleOnChange}
                />
              </label>
              <button type="submit">Save Recipe</button>
            </fieldset>
          </RecipeForm>
        )}
      </Mutation>
    );
  }
}

export default CreateRecipe;
