import { Button, Checkbox, Label, TextInput } from "flowbite-react";
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
    <div className="h-[450px] w-96 mx-auto">
      <form
        className="flex flex-col gap-4 h-full justify-center"
        onSubmit={formik.handleSubmit}
      >
        <h4 className="text-3xl font-medium capitalize">Log In</h4>

        <div>{isLoading ? error : message}</div>
        <div>
          <div className="mb-2 block w-full">
            <Label htmlFor="username" value="Username" />
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
            <Label htmlFor="password1" value="Password" />
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
