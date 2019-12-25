import gql from "graphql-tag";
import { Query } from "react-apollo";
import CreateEditRecipe from "../components/CreateEditRecipe";

const ONE_RECIPE_QUERY = gql`
  query ONE_RECIPE_QUERY($id: ID!) {
    recipe(where: { id: $id }) {
      id
      name
      style
      batchSize
    }
  }
`;

const Recipes = props => {
  const { query } = props;
  return query.id ? (
    <Query query={ONE_RECIPE_QUERY} variables={query}>
      {({ data, error, loading }) => {
        return (
          <div>
            <h2>Recipes</h2>
            <CreateEditRecipe {...data.recipe} />
          </div>
        );
      }}
    </Query>
  ) : (
    <div>
      <h2>Recipes</h2>
      <CreateEditRecipe />
    </div>
  );
};

export default Recipes;
