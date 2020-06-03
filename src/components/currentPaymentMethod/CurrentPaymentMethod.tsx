import React, { useState } from "react";
import styles from "./CurrentPaymentMethod.module.scss";
import Button from "../input/button/Button";
import { CardDetails } from "../../containers/billingPage/BillingPage";
import SemanticModal from "../semanticModal/SemanticModal";
import EditPaymentMethod from "../editPaymentMethod/EditPaymentMethod";
interface CurrentPaymentMethodProps {
  cardNumber: string;
  src?: string;
  cardHolderName?: string;
  expiryDate?: string;
  onSave: (cardDetails: CardDetails) => any;
}
const CurrentPaymentMethod = (props: CurrentPaymentMethodProps) => {
  const [showPaymentDetails, setPaymentDetailsDialog] = useState(false);
  let cardNumber: string = props.cardNumber;

  let cardNumberList = [];
  for (let i = 1; i < cardNumber.length - 3; i++) {
    let classes = [styles.cardDigit];
    if (i % 4 === 0) classes.push(styles.sideMargin);
    cardNumberList.push(
      <span key={i} className={classes.join(" ")}>
        *
      </span>
    );
  }
  for (let i = cardNumber.length - 3; i < cardNumber.length + 1; i++) {
    cardNumberList.push(
      <span key={i} className={styles.cardDigit}>
        {cardNumber[i - 1]}
      </span>
    );
  }

  const onPaymentMethodChanged = (creditCardNumber: string) => {
    props.onSave({
      cardNumber: creditCardNumber,
      expiryDate: "December 23, 2022",
    });
    setPaymentDetailsDialog(false);
  };
  return (
    <div className={styles.paymentMethodWrapper}>
      {showPaymentDetails ? (
        <SemanticModal
          size="tiny"
          children={
            <EditPaymentMethod
              contentStyle={{ padding: " 0 10%" }}
              onSave={onPaymentMethodChanged}
              onClose={() => setPaymentDetailsDialog(false)}
            />
          }
        />
      ) : null}
      <h6 className={styles.title}>Payment Method</h6>
      <div className={styles.paymentDetailsWrapper}>
        <img
          className={styles.imageStyle}
          src={props.src}
          alt="Payment Method"
        />
        <div className={styles.paymentDetails}>
          <div className={styles.cardNumber}>{cardNumberList}</div>
          <h6 className={styles.name}>{props.cardHolderName}</h6>
          <h6 className={styles.expiryDate}>
            Expires on &nbsp;{props.expiryDate}
          </h6>
          <div className={styles.buttonWrapper}>
            <Button
              label={"Change"}
              onClick={() => setPaymentDetailsDialog(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CurrentPaymentMethod;
