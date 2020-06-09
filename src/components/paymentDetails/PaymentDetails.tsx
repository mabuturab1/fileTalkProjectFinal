import React from "react";
import styles from "./PaymentDetails.module.scss";
import { Form } from "semantic-ui-react";
import Button from "../input/button/Button";

import InputFormField from "../input/formField/FormField";
import CountryList from "../countryList/CountryList";

import { withFormik } from "formik";
import CreditCardInput from "../creditCardInput/CreditCardInput";
import * as Yup from "yup";

const PaymentDetails = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,

  handleSubmit,
  setFieldValue,
}: any) => {
  const formData = {
    fullName: {
      label: "Full Name",
      placeholder: "Please enter full name",
    },
    country: {
      label: "Country",
      placeholder: "eg. South Korea",
    },
  };
  const handleChangeDropdown = (e: any, { name, value }: any) =>
    setFieldValue(name, value);

  return (
    <Form>
      <div className={styles.billingForm} style={values.contentStyle}>
        <div className={styles.content}>
          <div className={styles.personalInfo}>
            <div className={styles.singleForm}>
              <InputFormField
                error={errors.fullName}
                elementConfig={formData.fullName}
                handleChange={handleChange}
                name={"fullName"}
                value={values.fullName}
                touched={touched.fullName}
                labelStyle={{ width: "80px" }}
                maxWidthAuto={true}
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
                labelStyle={{ width: "80px" }}
                maxWidthAuto={true}
              />
            </div>
          </div>
          <div className={styles.cardDetails}>
            <CreditCardInput
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
            />
            <p className={styles.cardSubtitles}>
              Your credit card will be stored with out secure partner{" "}
              <a
                target="_blank"
                href="https://stripe.com/"
                rel="noopener noreferrer"
              >
                Stripe
              </a>
            </p>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          {!errors.paymentError ? (
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              padding={["13px", "96px"]}
              label={"Pay " + values.totalAmount}
              showLoader={isSubmitting}
            />
          ) : (
            <Button
              disabled={isSubmitting}
              onClick={handleSubmit}
              padding={["13px", "96px"]}
              label={"Payment Error"}
              backgroundColor={"#DDDDDD"}
              isErrorText={true}
              showLoader={isSubmitting}
            />
          )}
        </div>
      </div>
    </Form>
  );
};

const FormikPaymentBillingInfo = withFormik({
  mapPropsToValues(props: any) {
    return {
      fullName: props.fullName || "",

      country: props.country || "",
      creditCardNumber: props.creditCardNumber || "",
      totalAmount: props.totalAmount || 0,
      creditCardNumberMM: "",
      creditCardNumberYY: "",
      creditCardNumberCVC: "",
      paymentError: false,
      onClose: props.onClose,
      onSubmit: props.onPay,
      contentStyle: props.contentStyle,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting, resetForm }) {
    setTimeout(() => {
      setSubmitting(false);
      if (values.creditCardNumber.length < 10) {
        setErrors({
          paymentError: "Payment Error",
        });
        setSubmitting(false);
      } else {
        resetForm();
        values.onSubmit();
      }
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required("First name is required"),

    country: Yup.string().required("Country is required"),
    creditCardNumber: Yup.number()
      .typeError("not a valid number")
      .positive("not a valid number")
      .required("Card number is required"),
    creditCardNumberMM: Yup.number()
      .typeError("MM is not valid ")
      .positive("MM is not valid ")
      .required("Month is required"),
    creditCardNumberYY: Yup.number()
      .typeError("YY is not valid number")
      .positive("YY is not valid number")
      .required("Year is required"),
    creditCardNumberCVC: Yup.number()
      .typeError("CVC is not a valid number")
      .positive("CVC is not a valid number")
      .required("CVC is required"),
  }),
})(PaymentDetails);
export default FormikPaymentBillingInfo;
