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
      <div>
        <h4>Log In</h4>

        <div>{isLoading ? error : message}</div>
        <div className="form-body">
          <div className="lastname">
            <label className="form__label">username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="form__input"
              placeholder="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>

          <div className="password">
            <label className="form__label">Password </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <div className="footer">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};
export default Login;
