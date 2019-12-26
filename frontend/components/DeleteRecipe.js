import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const DELETE_MANY_RECIPES_MUTATION = gql`
  mutation DELETE_MANY_RECIPES_MUTATION($ids: [ID!]) {
    deleteManyRecipes(ids: $ids) {
      count
    }
  }
`;

class DeleteRecipe extends Component {
  deleteRows = async deleteManyRecipes => {
    const rowIds = this.props.selectedRows.map(row => row.id);
    const res = await deleteManyRecipes({ variables: { ids: rowIds } });
  };
  render() {
    return (
      <Mutation mutation={DELETE_MANY_RECIPES_MUTATION}>
        {(deleteManyRecipes, { error }) => (
          <button onClick={() => this.deleteRows(deleteManyRecipes)}>
            Delete
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteRecipe;
