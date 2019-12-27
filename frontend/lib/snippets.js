const DELETE_MANY_RECIPES_MUTATION = gql`
  mutation DELETE_MANY_RECIPES_MUTATION($ids: [ID!]) {
    deleteManyRecipes(ids: $ids) {
      count
    }
  }
`;
