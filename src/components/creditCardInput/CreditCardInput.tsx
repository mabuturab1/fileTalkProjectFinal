import React from "react";
import styles from "./CreditCardInput.module.scss";

import InputFormField from "../input/formField/FormField";

const CreditCardInput = (props: {
  values: any;
  errors: any;
  handleChange: any;
  touched: any;
}) => {
  var { values, touched, errors, handleChange } = props;
  console.log(values, errors, touched, handleChange);
  const formData = {
    creditCardNumber: {
      label: undefined,
      placeholder: "Card Number",
    },
    creditCardNumberMM: {
      label: undefined,
      placeholder: "MM/",
    },
    creditCardNumberYY: {
      label: undefined,
      placeholder: "YY",
    },
    creditCardNumberCVC: {
      label: undefined,
      placeholder: "CVC",
    },
  };
  let isError = () => {
    return (
      (errors.creditCardNumber && touched.creditCardNumber) ||
      (errors.creditCardNumberMM && touched.creditCardNumberMM) ||
      (errors.creditCardNumberYY && touched.creditCardNumberYY) ||
      (errors.creditCardNumberCVC && touched.creditCardNumberCVC)
    );
  };
  let getErrorToDisplay = () => {
    if (errors.creditCardNumber && touched.creditCardNumber)
      return errors.creditCardNumber;
    if (errors.creditCardNumberMM && touched.creditCardNumberMM)
      return errors.creditCardNumberMM;
    if (errors.creditCardNumberYY && touched.creditCardNumberYY)
      return errors.creditCardNumberYY;
    if (errors.creditCardNumberCVC && touched.creditCardNumberCVC)
      return errors.creditCardNumberCVC;
  };
  return (
    <div className={styles.wrapper}>
      <label className={styles.inputLabel}>Credit or Debit card</label>
      <div className={styles.creditCard}>
        <div className={styles.cardNumber}>
          <InputFormField
            fieldWrapperStyle={{ marginBottom: 0 }}
            customIcon={"icon-card-icon"}
            elementConfig={formData.creditCardNumber}
            handleChange={handleChange}
            labelStyle={{ display: "inline-block", marginBottom: "5px" }}
            name={"creditCardNumber"}
            value={values.creditCardNumber}
            touched={touched.creditCardNumber}
            removeBorder={true}
            isInputFullWidth={true}
          />
        </div>
        <div className={styles.cardAuthDetails}>
          <InputFormField
            fieldWrapperStyle={{ marginBottom: 0 }}
            elementConfig={formData.creditCardNumberMM}
            handleChange={handleChange}
            name={"creditCardNumberMM"}
            value={values.creditCardNumberMM}
            touched={touched.creditCardNumberMM}
            removeBorder={true}
            removeInputPadding={"leftRight"}
            acceptCustomWidth={true}
            inputStyle={{ width: "40px" }}
          />
          <InputFormField
            fieldWrapperStyle={{ marginBottom: 0 }}
            elementConfig={formData.creditCardNumberYY}
            handleChange={handleChange}
            name={"creditCardNumberYY"}
            value={values.creditCardNumberYY}
            touched={touched.creditCardNumberYY}
            removeBorder={true}
            removeInputPadding={"leftRight"}
            acceptCustomWidth={true}
            inputStyle={{ width: "40px" }}
          />
          <InputFormField
            fieldWrapperStyle={{ marginBottom: 0 }}
            elementConfig={formData.creditCardNumberCVC}
            handleChange={handleChange}
            name={"creditCardNumberCVC"}
            value={values.creditCardNumberCVC}
            touched={touched.creditCardNumberCVC}
            removeBorder={true}
            removeInputPadding={"leftRight"}
            acceptCustomWidth={true}
            inputStyle={{ width: "40px" }}
          />
        </div>
      </div>
      {isError() && (
        <span className={styles.errorWrapper}>{getErrorToDisplay()}</span>
      )}
    </div>
  );
};

export default CreditCardInput;
