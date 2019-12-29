import { Query } from "react-apollo";
import Signin from "../components/Signin";
import { CURRENT_USER_QUERY } from "../components/User";

const PleaseSignIn = props => {
  return (
    <Query query={CURRENT_USER_QUERY}>
      {({ data, loading }) => {
        if (loading) return <h2>Loading...</h2>;
        if (!data.me) {
          return (
            <div>
              <h2>Please Sign In To Continue</h2>
              <Signin />
            </div>
          );
        }
        return props.children;
      }}
    </Query>
  );
};

export default PleaseSignIn;
