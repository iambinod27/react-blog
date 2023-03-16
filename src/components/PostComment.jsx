import { Textarea } from "flowbite-react";
import { useFormik } from "formik";

const PostComment = () => {
  const formik = useFormik({
    initialValues: {
      content: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      console.log(formik.values);
    }
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} onKeyDown={handleKeyDown}>
        <Textarea
          className="resize-none"
          placeholder="Write what you think..."
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </form>
    </>
  );
};
export default PostComment;
