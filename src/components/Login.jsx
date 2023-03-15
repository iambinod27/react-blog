import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../store/actions/authActions";

const Login = () => {
  const { error, message, isLoading } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "username Must be 20 characters or less.")
        .required("Username is required."),
      password: Yup.string().required("Password Field is Required"),
    }),

    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <div className="h-[450px] w-96 mx-auto">
      <form
        className="flex flex-col gap-4 h-full justify-center"
        onSubmit={formik.handleSubmit}
      >
        <h4 className="text-3xl font-medium capitalize">Log In</h4>

        <div>{isLoading ? error : message}</div>
        <div>
          <div className="mb-2 block w-full">
            <Label
              htmlFor="username"
              value={
                formik.touched.username && formik.errors.username
                  ? formik.errors.username
                  : "Username"
              }
              className={`${
                formik.touched.username && formik.errors.username
                  ? "text-red-700"
                  : "text-black"
              }`}
            />
          </div>
          <TextInput
            type="text"
            required={true}
            name="username"
            id="username"
            className="form__input"
            placeholder="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value={
                formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : "Password"
              }
              className={`${
                formik.touched.password && formik.errors.password
                  ? "text-red-700"
                  : "text-black"
              }`}
            />
          </div>
          <TextInput
            type="password"
            required={true}
            id="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" color="dark">
          Login
        </Button>
      </form>
    </div>
  );
};
export default Login;
