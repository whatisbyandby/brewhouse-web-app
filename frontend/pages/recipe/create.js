import CreateRecipe from "../../components/recipe/CreateRecipe";
import PleaseSignIn from "../../components/user/PleaseSignIn";

const Create = props => {
  return (
    <PleaseSignIn>
      <h2>New Recipe</h2>
      <CreateRecipe />
    </PleaseSignIn>
  );
};

export default Create;
