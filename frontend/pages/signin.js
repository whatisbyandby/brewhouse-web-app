import Signin from "../components/user/Signin";
import Signup from "../components/user/Signup";
import RequestReset from "../components/user/RequestReset";

const SignupPage = props => {
  return (
    <div>
      <Signin />
      <Signup />
      <RequestReset />
    </div>
  );
};

export default SignupPage;
