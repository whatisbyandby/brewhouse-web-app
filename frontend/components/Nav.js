import Link from "next/link";
import Navstyles from "./styles/NavStyles";

const Nav = () => {
  return (
    <Navstyles>
      <Link href="/recipe">
        <a>Recipes</a>
      </Link>
      <Link href="/batch-data">
        <a>Batch Data</a>
      </Link>
      <Link href="/profiles">
        <a>Profiles</a>
      </Link>
    </Navstyles>
  );
};

export default Nav;
