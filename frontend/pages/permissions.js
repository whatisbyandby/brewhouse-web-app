import PleaseSignIn from "../components/PleaseSignIn";
import Permissions from "../components/Permissions";

const PermissionsPage = props => {
  return (
    <PleaseSignIn>
      <h2>Permissions</h2>
      <Permissions />
    </PleaseSignIn>
  );
};

export default PermissionsPage;
