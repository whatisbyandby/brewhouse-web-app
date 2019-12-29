import CreateRecipe from "../../components/CreateRecipe";
import PleaseSignIn from "../../components/PleaseSignIn";

const Create = props => {
  return (
    <PleaseSignIn>
      <h2>New Recipe</h2>
      <CreateRecipe />
    </PleaseSignIn>
  );
};

export default Create;
