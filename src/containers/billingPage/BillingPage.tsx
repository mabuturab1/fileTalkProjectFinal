import React, { useState } from "react";
import styles from "./BillingPage.module.scss";
import BillingInformation from "../forms/billingInformation/BillingInformation";
import CurrentPaymentMethod from "../../components/currentPaymentMethod/CurrentPaymentMethod";
import visaPayment from "../../assets/images/Visa.png";
import InvoicePage from "../invoicePage/InvoicePage";

export interface UserBillingInfo {
  firstName: string;
  lastName: string;
  country: string;
  vatId?: string;
  billingAddress?: string;
  countryName?: string;
}
export interface CardDetails {
  cardNumber: string;
  expiryDate: string;
}
interface BillingPageProps {
  onClose?: () => any;
}
const BillingPage = (props: BillingPageProps) => {
  const [billingUserData, setBillingUserData] = useState<UserBillingInfo>({
    firstName: "Francisco",
    lastName: "Alexander",
    country: "",
  });
  const [cardDetails, setCardDetails] = useState<CardDetails>({
    cardNumber: "123456783245",
    expiryDate: "December 2023",
  });
  const saveUserBillingInfo = (userData: UserBillingInfo) => {
    setBillingUserData(userData);
  };
  const saveUserCardDetails = (myCardDetails: CardDetails) => {
    setCardDetails(myCardDetails);
  };
  return (
    <div className={styles.billingPageWraper}>
      <div className={styles.billingFormWrapper}>
        <BillingInformation
          onClose={props.onClose}
          onSave={saveUserBillingInfo}
        />
      </div>
      <div className={styles.topMargin}>
        <CurrentPaymentMethod
          cardNumber={cardDetails.cardNumber}
          cardHolderName={`${billingUserData.firstName} ${billingUserData.lastName}`}
          expiryDate={cardDetails.expiryDate}
          src={visaPayment}
          onSave={saveUserCardDetails}
        />
      </div>
      <div className={styles.topMargin}>
        <InvoicePage />
      </div>
    </div>
  );
};
export default BillingPage;
