import React from "react";
import styles from "./EditProfile.module.scss";
import HeaderText from "../headerText/HeaderText";
import InputFormField from "../input/formField/FormField";
import { withFormik } from "formik";
import { Form } from "semantic-ui-react";
import * as Yup from "yup";
import Button from "../input/button/Button";

interface EditProfileProps {
  onCancel: () => any;
  onSave?: (data: {
    firstName: string;
    lastName: string;
    password: string;
    confirmPassword: string;
  }) => any;
}
const EditProfile = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,
  handleBlur,
  handleSubmit,
}: any) => {
  const formData = {
    firstName: {
      label: "First Name",
      placeholder: "Please enter first name",
    },
    lastName: {
      label: "Last Name",
      placeholder: "Please enter last name",
    },
    password: {
      label: "Password",
      placeholder: "Please enter password",
      type: "password",
    },
    confirmPassword: {
      label: "Confirm Password",
      placeholder: "Kindly confirm password",
      type: "password",
    },
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.bottomBorder}>
        <HeaderText
          textColor={"#263238"}
          onCancel={values.onCancel}
          titleText={"Edit Profile"}
        />
      </div>
      <div className={styles.formData}>
        <Form>
          <div className={[styles.name, styles.bottomBorder].join(" ")}>
            <div className={styles.singleFieldWrapper}>
              <InputFormField
                error={errors.firstName}
                elementConfig={formData.firstName}
                handleChange={handleChange}
                name={"firstName"}
                value={values.firstName}
                touched={touched.firstName}
              />
            </div>
            <div className={styles.singleFieldWrapper}>
              <InputFormField
                error={errors.lastName}
                elementConfig={formData.lastName}
                handleChange={handleChange}
                name={"lastName"}
                value={values.lastName}
                touched={touched.lastName}
              />
            </div>
          </div>
          <div className={[styles.password, styles.bottomBorder].join(" ")}>
            <div className={styles.singleFieldWrapper}>
              <InputFormField
                error={errors.password}
                elementConfig={formData.password}
                handleChange={handleChange}
                name={"password"}
                value={values.password}
                touched={touched.password}
              />
            </div>
            <div className={styles.singleFieldWrapper}>
              <InputFormField
                error={errors.confirmPassword}
                elementConfig={formData.confirmPassword}
                handleChange={handleChange}
                name={"confirmPassword"}
                value={values.confirmPassword}
                touched={touched.confirmPassword}
              />
            </div>
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              label={"Save Changes"}
              showLoader={isSubmitting}
              width={"10rem"}
              height={"3rem"}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
const FormikEditProfile = withFormik({
  mapPropsToValues(props: any) {
    return {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      password: "",
      confirmPassword: "",
      onCancel: props.onCancel || null,
      onSave: props.onSave,
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
        values.onSave({
          firstName: values.firstName,
          lastName: values.lastName,
          password: values.password,
          confirmPassword: values.confirmPassword,
        });
      }, 2000);
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    password: Yup.string()
      .min(9, "Password must be at least 9 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .min(9, "Password must be at least 9 characters")
      .required("Password is required"),
  }),
})(EditProfile);
export default FormikEditProfile;
