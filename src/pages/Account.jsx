import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../store/actions/authActions";

const Account = () => {
  const { error } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      dispatch(register(values));
      console.log(values);
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <Box sx={{ width: "41%", m: "20px auto" }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          Let's get your account set up
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Alert
            icon={false}
            severity="warning"
            sx={` ${error ? "display : block," : "display : none"} `}
          >
            {error}
          </Alert>
        </Box>
        <Box sx={{ pb: 2 }} display={"flex"} justifyContent={"space-between"}>
          <TextField
            label="First Name"
            type="text"
            id="filled-hidden-label-small"
            placeholder="First Name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <TextField
            label="Last Name"
            type="text"
            id="filled-hidden-label-small"
            placeholder="lastname"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Box>

        <Box sx={{ pb: 2 }}>
          <TextField
            label="Email Address"
            type="email"
            id="email"
            fullWidth
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
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
        <Button
          variant="contained"
          sx={{ borderRadius: 0, mb: 2 }}
          type="submit"
          fullWidth
        >
          Register
        </Button>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            Already Have an Account?
          </Link>
        </Box>
      </Box>
    </form>
  );
};
export default Account;
