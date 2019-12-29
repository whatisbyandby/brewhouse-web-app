import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_RECIPES_QUERY } from "./RecipeGrid";

const DELETE_RECIPE_MUTATION = gql`
  mutation DELETE_RECIPE_MUTATION($id: ID!) {
    deleteRecipe(id: $id) {
      id
    }
  }
`;

class DeleteRecipe extends Component {
  update = (cache, payload) => {
    // manually update the cache on the client, so it matches the server
    // 1. Read the cache for the items we want
    const data = cache.readQuery({ query: ALL_RECIPES_QUERY });
    // 2. Filter the deleted itemout of the page
    data.recipes = data.recipes.filter(
      recipe => recipe.id !== payload.data.deleteRecipe.id
    );
    // 3. Put the items back!
    cache.writeQuery({ query: ALL_RECIPES_QUERY, data });
  };

  deleteRows = async deleteRecipeMutation => {
    if (
      this.props.selectedRow &&
      confirm("Are you sure you want to delete this?")
    ) {
      const rowId = this.props.selectedRow.id;
      const res = await deleteRecipeMutation({
        variables: { id: rowId }
      }).catch(error => alert(error.message));
    } else if (!this.props.selectedRow) {
      alert("No Row Selected");
    }
  };
  render() {
    return (
      <Mutation mutation={DELETE_RECIPE_MUTATION} update={this.update}>
        {(deleteRecipeMutation, { loading, error }) => (
          <button onClick={() => this.deleteRows(deleteRecipeMutation)}>
            {loading ? "Deleting..." : "Delete"}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteRecipe;
