import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import AgGridReact from "ag-grid-react";

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY {
    recipes {
      id
      name
      type
      style {
        name
      }
      batchSize
      boilTime
      estimatedOG
      estimatedFG
    }
  }
`;

class RecipeGrid extends Component {
  render() {
    return (
      <div>
        <Query query={ALL_RECIPES_QUERY}>
          {({ data, error, loading }) => {
            if (error) return <h1>Error: {error.message}</h1>;
            if (loading) return <h1>Loading....</h1>;
            return <h2>Grid</h2>;
          }}
        </Query>
      </div>
    );
  }
}

export default RecipeGrid;
export { ALL_RECIPES_QUERY };
