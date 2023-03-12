// import { Button } from "@mui/material";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated, username } = useSelector((state) => state.auth);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "60px",
          p: "0 20px",
          bgcolor: "#000",
        }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: "bold", textDecoration: "none", color: "white" }}
          >
            Blogoshpere.
          </Typography>
        </Link>
        <Box sx={{ display: "flex", gap: "10px" }}>
          {isAuthenticated ? (
            <p>`${username}`</p>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outlined">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="contained">Sign Up</Button>
              </Link>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
export default Navbar;
