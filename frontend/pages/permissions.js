import PleaseSignIn from "../components/user/PleaseSignIn";
import Permissions from "../components/user/Permissions";

const PermissionsPage = props => {
  return (
    <PleaseSignIn>
      <h2>Permissions</h2>
      <Permissions />
    </PleaseSignIn>
  );
};

export default PermissionsPage;
