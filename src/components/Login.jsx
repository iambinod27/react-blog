import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../store/actions/authActions";

const Login = () => {
  const { error, message, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ width: "41%", m: "20px auto" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Log In
        </Typography>

        <Box sx={{ pb: 2 }}>
          <Alert
            icon={false}
            severity={`${error ? "error" : "success"}`}
            sx={`${error || message ? "display : block" : "display : none"}`}
          >
            {isLoading ? error : message}
          </Alert>
        </Box>
        <Box sx={{ pb: 2 }}>
          <TextField
            fullWidth
            label="Username"
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box sx={{ pb: 2 }}>
          <TextField
            label="Password"
            type="password"
            fullWidth
            id="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>
        <FormControlLabel
          control={<Checkbox />}
          label="Remember password"
          sx={{ pb: 2 }}
        />
        <Button
          variant="contained"
          sx={{ borderRadius: 0, mb: 2 }}
          type="submit"
          fullWidth
        >
          Login
        </Button>
        <Box display={"flex"}>
          <Link
            to="/signup"
            style={{ textDecoration: "none", color: "#3e3e3e" }}
          >
            Create an Account
          </Link>
        </Box>
      </Box>
    </form>
  );
};
export default Login;
