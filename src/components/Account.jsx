import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/actions/authActions";
import * as Yup from "yup";

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

    validationSchema: Yup.object({
      first_name: Yup.string().required("First name is required"),
      last_name: Yup.string().required("Last name is required"),
      username: Yup.string()
        .max(20, "Username must be 20 characters or less.")
        .required("Username is required."),
      email: Yup.string()
        .email("Invalid email Address.")
        .required("Email Is required."),
      password: Yup.string().required("Password is Required."),
    }),

    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <>
      <div className="w-96 mx-auto my-20">
        <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
          <div>{error}</div>
          <div className="flex gap-3 w-full">
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value={
                    formik.touched.first_name && formik.errors.first_name
                      ? formik.errors.first_name
                      : "First name"
                  }
                  className={`${
                    formik.touched.first_name && formik.errors.first_name
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="first_name"
                type="name"
                placeholder="First name"
                required={true}
                shadow={true}
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            <div className="w-full">
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value={
                    formik.touched.last_name && formik.errors.last_name
                      ? formik.errors.last_name
                      : "Last name"
                  }
                  className={`${
                    formik.touched.last_name && formik.errors.last_name
                      ? "text-red-700"
                      : "text-black"
                  }`}
                />
              </div>
              <TextInput
                id="last_name"
                type="text"
                placeholder="Lastname"
                required={true}
                shadow={true}
                name="last_name"
                value={formik.values.last_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email2"
                value={
                  formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "Your email"
                }
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "text-red-700"
                    : "text-black"
                }`}
              />
            </div>
            <TextInput
              type="email"
              placeholder="name@flowbite.com"
              required={true}
              shadow={true}
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <div className="mb-2 block">
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
              shadow={true}
              name="username"
              id="username"
              placeholder="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
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
              id="password"
              type="password"
              required={true}
              shadow={true}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="agree" />
            <Label htmlFor="agree">
              I agree with the
              <a
                href="/forms"
                className="text-blue-600 hover:underline dark:text-blue-500 ml-1"
              >
                terms and conditions
              </a>
            </Label>
          </div>
          <Button type="submit">Register new account</Button>
        </form>
      </div>
    </>
  );
};
export default Account;
