import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "70px",
          padding: "0 20px",
        }}
      >
        <Link to="/">
          <h1>Blogoshpere.</h1>
        </Link>
        <div>
          <p>{!isAuthenticated ? "Account" : `${username}`}</p>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/signup">
            <p>Signup</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Navbar;
