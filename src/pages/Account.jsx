import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
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
      <div>
        <h4>Let's get your account set up</h4>

        <div>{error}</div>
        <div className="form-body">
          <div className="username">
            <label className="form__label">First Name</label>
            <input
              className="form__input"
              type="text"
              placeholder="First Name"
              name="first_name"
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="lastname">
            <label className="form__label">Last Name</label>
            <input
              type="text"
              className="form__input"
              placeholder="lastname"
              name="last_name"
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
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
          <div className="email">
            <label className="form__label">Email </label>
            <input
              type="email"
              id="email"
              className="form__input"
              placeholder="Email"
              value={formik.values.email}
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
            Register
          </button>
        </div>
      </div>
    </form>
  );
};
export default Account;
