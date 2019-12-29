import Link from "next/link";
import Navstyles from "../component-styles/NavStyles";
import User from "../components/User";
import Signout from "../components/Signout";

const Nav = () => {
  return (
    <User>
      {({ data: { me } }) => (
        <Navstyles>
          <Link href="/recipe">
            <a>Recipes</a>
          </Link>
          {me && (
            <>
              <Link href="/batch-data">
                <a>Batch Data</a>
              </Link>
              <Link href="/profiles">
                <a>Profiles</a>
              </Link>
              <Link href="/account">
                <a>Account</a>
              </Link>
              <Signout />
              <p>{me.name}</p>
            </>
          )}
          {!me && (
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          )}
        </Navstyles>
      )}
    </User>
  );
};

export default Nav;
