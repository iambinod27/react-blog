import {
  Button,
  FileInput,
  Label,
  Modal,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createPost } from "../store/actions/postActions";

const PostModal = ({ onClose, show }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: "",
      image: "",
      content: "",
    },

    onSubmit: (values) => {
      dispatch(createPost());
    },
  });

  return (
    <>
      <Modal show={show} size="xl" popup={true} onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Write Your Post
            </h3>
            {/* title */}
            <form onSubmit={formik.handleSubmit}>
              <div>
                <div className="mb-2 block">
                  <Label value="Title" />
                </div>
                <TextInput
                  id="title"
                  type="text"
                  name="title"
                  required={true}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* file */}
              <div id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload Image" />
                </div>
                <FileInput
                  id="file"
                  helperText="A profile picture is useful to confirm your are logged into your account"
                  name="image"
                  onChange={(e) =>
                    formik.setFieldValue("image", e.currentTarget.files[0])
                  }
                  onBlur={formik.handleBlur}
                />
              </div>

              {/* Textarea */}
              <div id="textarea">
                <div className="mb-2 block">
                  <Label value="Content" />
                </div>
                <Textarea
                  id="content"
                  placeholder="Eg: Hoy es no dinero, puta"
                  required={true}
                  className="resize-none"
                  name="content"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              <div className="w-full">
                <Button type="submit">Post</Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PostModal;
