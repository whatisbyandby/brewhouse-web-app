import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { AgGridReact } from "ag-grid-react";
import StyledGrid from "../component-styles/StyledGrid";

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
  columnDefs = [
    {
      headerName: "Name",
      field: "name"
    },
    {
      headerName: "Type",
      field: "type"
    }
  ];

  render() {
    return (
      <StyledGrid>
        <div
          className="ag-theme-balham"
          style={{
            height: "600px",
            width: "100%"
          }}
        >
          <Query query={ALL_RECIPES_QUERY}>
            {({ data, error, loading }) => {
              if (error) return <h1>Error: {error.message}</h1>;
              if (loading) return <h1>Loading....</h1>;
              return (
                <AgGridReact
                  columnDefs={this.columnDefs}
                  rowData={data.recipes}
                />
              );
            }}
          </Query>
        </div>
      </StyledGrid>
    );
  }
}

export default RecipeGrid;
export { ALL_RECIPES_QUERY };
