import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbars = () => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <Link to="/">
          <h1>Blogoshpere.</h1>
        </Link>
        <div sx={{ display: "flex", gap: "10px" }}>
          {isAuthenticated ? (
            <p>`${username}`</p>
          ) : (
            <>
              <Link to="/login">
                <button>Login</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};
export default Navbars;
