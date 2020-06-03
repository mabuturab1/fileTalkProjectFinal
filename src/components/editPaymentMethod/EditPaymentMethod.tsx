import React from "react";
import styles from "./EditPaymentMethod.module.scss";
import HeaderText from "../headerText/HeaderText";
import InputFormField from "../input/formField/FormField";
import PaymentMethod from "../../assets/images/PaymentMethod.png";
import PaymentMethod1 from "../../assets/images/PaymentMethod1.png";
import PaymentMethod2 from "../../assets/images/PaymentMethod2.png";
import PaymentMethod3 from "../../assets/images/PaymentMethod3.png";

import Button from "../input/button/Button";
import { withFormik } from "formik";
import * as Yup from "yup";
interface EditPaymentMethodProps {
  onClose: () => any;
}
const editPaymentMethod = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,

  handleSubmit,
  setFieldValue,
}: any) => {
  const getPaymentMethods = () => {
    var list: any = [];
    [PaymentMethod, PaymentMethod1, PaymentMethod2, PaymentMethod3].forEach(
      (el, i) => {
        list.push(
          <div key={i} className={styles.singleImage}>
            <img src={el} alt="paymentMethod" />
          </div>
        );
      }
    );
    return list;
  };

  const formData = {
    creditCardNumber: {
      label: "Credit or debit card",
      placeholder: "Card Number",
    },
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderText
          titleText={"Change Payment Method"}
          onCancel={values.onClose}
        />
      </div>
      <div className={styles.contentWrapper} style={values.contentStyle}>
        <div className={styles.cardDetails}>
          <InputFormField
            customIcon={"icon-card-icon"}
            error={errors.creditCardNumber}
            elementConfig={formData.creditCardNumber}
            handleChange={handleChange}
            name={"creditCardNumber"}
            value={values.creditCardNumber}
            touched={touched.creditCardNumber}
            isInputFullWidth={true}
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
        <div className={styles.paymentMethods}>{getPaymentMethods()}</div>
        <div className={styles.paymentMethodSubtitles}>
          All major credit and debit cards accepted
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            showLoader={isSubmitting}
            disabled={isSubmitting}
            label={"Save Changes"}
            width={"10rem"}
            onClick={handleSubmit}
          />
          <Button
            onClick={values.onClose}
            label={"Cancel"}
            width={"9rem"}
            backgroundColor={"transparent"}
            style={{ color: "black", fontFamily: "Roboto", fontWeight: 400 }}
          />
        </div>
      </div>
    </div>
  );
};

const FormikEditPaymentInfo = withFormik({
  mapPropsToValues(props: any) {
    return {
      creditCardNumber: props.creditCardNumber || "",

      onClose: props.onClose,
      onSave: props.onSave,
      contentStyle: props.contentStyle,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting, resetForm }) {
    setTimeout(() => {
      if (values.creditCardNumber.length < 10) {
        setErrors({
          creditCardNumber: "Invalid card number",
        });
        setSubmitting(false);
      } else {
        setSubmitting(false);
        resetForm();
        values.onSave(values.creditCardNumber);
      }
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    creditCardNumber: Yup.number()
      .typeError("not a valid number")
      .positive("not a valid number")
      .required("Card number is required"),
  }),
})(editPaymentMethod);
export default FormikEditPaymentInfo;
