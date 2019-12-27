import Signin from "../components/Signin";
import Signup from "../components/Signup";
import RequestReset from "../components/RequestReset";

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
