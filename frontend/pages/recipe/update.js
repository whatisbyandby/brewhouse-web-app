import UpdateRecipe from "../../components/recipe/UpdateRecipe";
import PleaseSignIn from "../../components/user/PleaseSignIn";

const Update = props => {
  return (
    <PleaseSignIn>
      <h2>Update</h2>
      <UpdateRecipe id={props.query.id} />
    </PleaseSignIn>
  );
};

export default Update;
