import { Textarea } from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  createPostComment,
  fetchPostComment,
} from "../store/actions/commentsActions";
import { getHttpOnlyCookies } from "../utils/getHttpOnlyCookies";

const PostComment = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isAuth = getHttpOnlyCookies("access_token");

  const formik = useFormik({
    initialValues: {
      content: "",
      rating: 1,
    },

    onSubmit: (values, { resetForm }) => {
      console.log({ id: 1, ...formik.values });
      if (isAuth) {
        dispatch(createPostComment({ id: id, ...values }));
        dispatch(fetchPostComment(id));
      }
      resetForm();
    },
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      formik.handleSubmit();
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
