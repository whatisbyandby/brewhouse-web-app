import UpdateRecipe from "../../components/UpdateRecipe";

const Update = props => {
  return (
    <div>
      <h2>Update</h2>
      <UpdateRecipe id={props.query.id} />
    </div>
  );
};

export default Update;
