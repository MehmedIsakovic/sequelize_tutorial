import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <div className="createPostPage">
      <Formik
        initialValues={{ title: "", body: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "Required";
          } else if (values.title.length > 15) {
            errors.title = "Must be 15 characters or less";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            axios
              .post("http://localhost:3001/posts", values)
              .then((response) => {
                console.log("IT WORKED");
              });
            navigate("/");
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="formContainer">
            <label> Title</label>
            <Field type="text" name="title" id="inputCreatePost" />
            <ErrorMessage name="title" component="div" />
            <label> Body</label>
            <Field type="text" name="body" id="inputCreatePost" />
            <ErrorMessage name="body" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreatePost;
