import CreateStyle from "../../components/CreateStyle";
import PleaseSignIn from "../../components/PleaseSignIn";

const CreateStylePage = props => {
  return (
    <PleaseSignIn>
      <h2>New Style</h2>
      <CreateStyle />
    </PleaseSignIn>
  );
};

export default CreateStylePage;
