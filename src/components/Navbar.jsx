// import { Button } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <>
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Blogoshpere.</h3>
        </Link>
        <div>
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
export default Navbar;
