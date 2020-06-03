import React, { useState } from "react";

import { Form, Divider, Icon } from "semantic-ui-react";
import InputFormField from "../../../components/input/formField/FormField";
import { withFormik } from "formik";
import Button from "../../../components/input/button/Button";
import * as Yup from "yup";
import styles from "./BillingInformation.module.scss";
import CountryList from "../../../components/countryList/CountryList";

const BillingInformation = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,

  handleSubmit,
  setFieldValue,
}: any) => {
  const [isOptionsVisible, setOptionsVisibility] = useState(false);
  const formData = {
    firstName: {
      label: "First Name",
      placeholder: "Please enter first name",
    },
    lastName: {
      label: "Last Name",
      placeholder: "Please enter last name",
    },
    country: {
      label: "Country",
      placeholder: "eg. South Korea",
    },
    vatId: {
      label: "VAT ID Number",
      placeholder: "VAT ID",
    },
    billingAddress: {
      label: "Billing Address",
      placeholder: "Address",
    },
    companyName: {
      label: "Comany Name",
      placeholder: "Company Name",
    },
  };
  let billingClass = [styles.billingForm];
  if (values.showDivider) {
    billingClass.push(styles.removeBorder);
  }
  const toggleOptionsVisibility = () => {
    let newState = !isOptionsVisible;
    setOptionsVisibility(newState);
  };
  const getDivider = () => {
    if (values.showDivider) return <Divider />;
    else return null;
  };

  const handleChangeDropdown = (e: any, { name, value }: any) =>
    setFieldValue(name, value);
  return (
    <div className={styles.billingInformationWrapper}>
      <h6 className={styles.title}>Billing Information</h6>
      {getDivider()}
      <div className={billingClass.join(" ")}>
        <Form>
          <div className={styles.singleForm}>
            <InputFormField
              error={errors.firstName}
              elementConfig={formData.firstName}
              handleChange={handleChange}
              name={"firstName"}
              value={values.firstName}
              touched={touched.firstName}
            />
          </div>
          <div className={styles.singleForm}>
            <InputFormField
              error={errors.lastName}
              elementConfig={formData.lastName}
              handleChange={handleChange}
              name={"lastName"}
              value={values.lastName}
              touched={touched.lastName}
            />
          </div>
          <div className={styles.singleForm}>
            <CountryList
              error={errors.country}
              elementConfig={formData.country}
              handleChange={handleChangeDropdown}
              name={"country"}
              value={values.country}
              touched={touched.country}
            />
          </div>
          <Divider />
          <div className={styles.optionWrapper}>
            <div
              onClick={() => toggleOptionsVisibility()}
              className={styles.optionTitle}
            >
              <h6 className={styles.subtitle}>Optional</h6>
              <Icon
                style={{ color: "black" }}
                name={isOptionsVisible ? "angle up" : "angle down"}
              />
            </div>
            {isOptionsVisible ? (
              <div className={styles.optionWrapperContent}>
                <div className={styles.singleForm}>
                  <InputFormField
                    error={errors.password}
                    elementConfig={formData.vatId}
                    handleChange={handleChange}
                    name={"vatId"}
                    value={values.vatId}
                    touched={touched.vatId}
                  />
                </div>
                <div className={styles.singleForm}>
                  <InputFormField
                    error={errors.billingAddress}
                    elementConfig={formData.billingAddress}
                    handleChange={handleChange}
                    name={"billingAddress"}
                    value={values.billingAddress}
                    touched={touched.billingAddress}
                  />
                </div>
                <div className={styles.singleForm}>
                  <InputFormField
                    error={errors.companyName}
                    elementConfig={formData.companyName}
                    handleChange={handleChange}
                    name={"companyName"}
                    value={values.companyName}
                    touched={touched.companyName}
                  />
                </div>
              </div>
            ) : null}
          </div>
        </Form>
        <div className={styles.buttonWrapper}>
          <Button
            disabled={isSubmitting}
            onClick={handleSubmit}
            label={"Save Changes"}
            showLoader={isSubmitting}
            width={"9.3rem"}
            height={"2.6rem"}
          />
        </div>
      </div>
    </div>
  );
};
const FormikBillingInfo = withFormik({
  mapPropsToValues(props: any) {
    return {
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      country: props.country || "",
      vatId: props.vatId || "",
      billingAddress: props.billingAddress || "",
      companyName: props.companyName || "",
      showDivider: props.showDivider || false,
      onClose: props.onClose,
      onSave: props.onSave,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting, resetForm }) {
    setTimeout(() => {
      setSubmitting(false);
      values.onSave({
        firstName: values.firstName,
        lastName: values.lastName,
        country: values.country,
        vatId: values.vatId,
        billingAddress: values.billingAddress,
        companyName: values.companyName,
      });
      resetForm();
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    country: Yup.string().required("Country is required"),
    vatId: Yup.number().positive(),
    billingAddress: Yup.string(),
    companyName: Yup.string(),
  }),
})(BillingInformation);
export default FormikBillingInfo;
