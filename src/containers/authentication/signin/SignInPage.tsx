import React from "react";
import styles from "./SignInPage.module.scss";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Form } from "semantic-ui-react";

import { Link } from "react-router-dom";
import InputFormField from "../../../components/input/formField/FormField";
import Button from "../../../components/input/button/Button";

const SignInPage = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,
  handleBlur,
  handleSubmit,
}: any) => {
  const formData = {
    email: {
      placeholder: "Email address",
    },
    password: {
      placeholder: "Password",
      type: "password",
    },
  };
  return (
    <div className={styles.wrapper}>
      <Form>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>Sign in</h3>
          <div className={styles.signInForm}>
            <div className={styles.singleInputWrapper}>
              <InputFormField
                error={errors.email}
                elementConfig={formData.email}
                handleChange={handleChange}
                name={"email"}
                value={values.email}
                touched={touched.email}
                labelStyle={{ color: "white" }}
                errorStyle={{ color: "black" }}
              />
            </div>
            <div className={styles.singleInputWrapper}>
              <InputFormField
                error={errors.password}
                elementConfig={formData.password}
                handleChange={handleChange}
                name={"password"}
                value={values.password}
                touched={touched.password}
                labelStyle={{ color: "white" }}
                errorStyle={{ color: "black" }}
              />
            </div>
            <h4 className={styles.forgotPassword}>Forgot Password?</h4>
            <div className={styles.buttonWrapper}>
              <Button
                showLoader={isSubmitting}
                onClick={handleSubmit}
                backgroundColor={"#355BE4"}
                hoverColor={"#6435c9"}
                label={"Sign in"}
                width={"8rem"}
                height={"3.5rem"}
                style={{ borderRadius: "2.5rem" }}
              />
            </div>
            <Link to="/sign-up">
              <h4 className={styles.signUpLink}>Or sign up</h4>
            </Link>
          </div>
          <h4 className={styles.logInError}>{errors.logInError}</h4>
        </div>
      </Form>
    </div>
  );
};
const FormikSignIn = withFormik({
  mapPropsToValues(props: any) {
    return {
      email: props.email || "",
      password: "",
      setAuthStatus: props.setAuthStatus,
      onCancel: props.onCancel || null,
      onSave: props.onSave,
      history: props.history,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting }) {
    setTimeout(() => {
      setSubmitting(false);
      if (values.password !== "12345") {
        setErrors({
          logInError: "Invalid username or password",
        });
        values.setAuthStatus(false);
      } else {
        values.setAuthStatus(true);
        values.history.push("/");
      }
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Kindly enter valid email")
      .required("First name is required"),

    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  }),
})(SignInPage);
export default FormikSignIn;
