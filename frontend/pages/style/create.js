import CreateStyle from "../../components/style/CreateStyle";
import PleaseSignIn from "../../components/user/PleaseSignIn";

const CreateStylePage = props => {
  return (
    <PleaseSignIn>
      <h2>New Style</h2>
      <CreateStyle />
    </PleaseSignIn>
  );
};

export default CreateStylePage;
