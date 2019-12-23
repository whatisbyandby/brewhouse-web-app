import { Query } from "react-apollo";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import gql from "graphql-tag";

const ALL_RECIPE_QUERY = gql`
  query ALL_RECIPE_QUERY {
    recipes {
      id
      name
      style
      type
      estimatedOG
      estimatedFG
    }
  }
`;

const columnDefs = [
  { headerName: "Recipe Name", field: "name", sortable: true },
  { headerName: "Recipe Style", field: "style" },
  { headerName: "Recipe Type", field: "type" },
  { headerName: "Estimated OG", field: "estimatedOG" },
  { headerName: "Estimated FG", field: "estimatedFG" }
];

const parseRecipeType = recipeType => {
  const splitRecipeType = recipeType.split("_");
  const lowered = splitRecipeType.map(word => word.toLowerCase());
  const ready = lowered.map(
    lowered => lowered.charAt(0).toUpperCase() + lowered.slice(1)
  );
  const readyArray = ready.join(" ");
  return readyArray;
};

const parseRowData = rawData => {
  return rawData.map(recipe => ({
    name: recipe.name,
    style: recipe.style,
    type: parseRecipeType(recipe.type),
    estimatedOG: recipe.estimatedOG,
    estimatedFG: recipe.estimatedFG
  }));
};

const Grid = props => {
  return (
    <div className="ag-theme-balham" style={{ height: "500px", width: "100%" }}>
      <Query query={ALL_RECIPE_QUERY}>
        {payload => {
          return (
            <AgGridReact
              rowSelection="single"
              columnDefs={columnDefs}
              rowData={parseRowData(payload.data.recipes)}
            ></AgGridReact>
          );
        }}
      </Query>
    </div>
  );
};

export default Grid;
