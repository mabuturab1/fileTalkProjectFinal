import React from "react";
import styles from "./SignUpPage.module.scss";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Form } from "semantic-ui-react";
import { ReactComponent as FacebookLogo } from "../../../assets/icons/facebook-icon.svg";
import { ReactComponent as GoogleLogo } from "../../../assets/icons/google-icon.svg";

import InputFormField from "../../../components/input/formField/FormField";
import Button from "../../../components/input/button/Button";
const SignUpPage = ({
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
    confirmPassword: {
      placeholder: "Re-enter password",
      type: "password",
    },
  };
  return (
    <div className={styles.wrapper}>
      <Form>
        <div className={styles.contentWrapper}>
          <h3 className={styles.title}>Register Account</h3>
          <div className={styles.signUpForm}>
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
            <div className={styles.singleInputWrapper}>
              <InputFormField
                error={errors.confirmPassword}
                elementConfig={formData.confirmPassword}
                handleChange={handleChange}
                name={"confirmPassword"}
                value={values.confirmPassword}
                touched={touched.confirmPassword}
                labelStyle={{ color: "white" }}
                errorStyle={{ color: "black" }}
              />
            </div>
            <div className={styles.buttonWrapper}>
              <Button
                showLoader={isSubmitting}
                onClick={handleSubmit}
                backgroundColor={"#355BE4"}
                hoverColor={"#6435c9"}
                label={"Register"}
                style={{ borderRadius: "2.5rem" }}
                width={"8rem"}
                height={"3.5rem"}
              />
            </div>
            <h4 className={styles.socialMediaTitle}>Or sign in with</h4>
            <div className={styles.socialMediaWrapper}>
              <div className={styles.singleSocialMediaWrapper}>
                <GoogleLogo />
              </div>
              <div className={styles.singleSocialMediaWrapper}>
                <FacebookLogo />
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};
const FormikSignUp = withFormik({
  mapPropsToValues(props: any) {
    return {
      email: props.email || "",

      password: "",
      confirmPassword: "",
      onCancel: props.onCancel || null,
      onSave: props.onSave,
      setAuthStatus: props.setAuthStatus,
      history: props.history,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting }) {
    if (values.password !== values.confirmPassword) {
      setSubmitting(false);
      setErrors({
        confirmPassword: "Password does not match",
      });
    } else
      setTimeout(() => {
        setSubmitting(false);

        values.setAuthStatus(true);
        values.history.push("/");
      }, 2000);
  },
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Kindly enter valid email")
      .required("First name is required"),

    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .required("Password is required"),
  }),
})(SignUpPage);
export default FormikSignUp;
