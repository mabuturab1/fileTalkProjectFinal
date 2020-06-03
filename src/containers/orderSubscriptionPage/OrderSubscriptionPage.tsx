import React, { useContext, useState } from "react";
import styles from "./OrderSubscriptionPage.module.scss";

import OrderSummary, {
  OrderSummaryData,
} from "../../components/orderSummary/OrderSummary";
import PaymentDetails from "../../components/paymentDetails/PaymentDetails";
import HeaderText from "../../components/headerText/HeaderText";

import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
interface OrderPageProps {
  getOrderSummaryData: (annualSubscription: boolean) => OrderSummaryData;
  isAlreadySet: boolean;
  currentPacakge: CurrentPackage;
  onChangePlan: (val: boolean) => any;
  onCancelPlan: () => any;
  onPaid: (billingAnnually: boolean) => any;
  onClose: () => any;
}
const OrderSubscriptionPage = (props: OrderPageProps) => {
  const subsContext = useContext(SubscriptionContext);
  const [showOrderSummary, setOrderSummary] = useState(true);
  const [tempBillingAnnually, setTempBillingAnnually] = useState(
    subsContext.billingAnually
  );
  const onProceedClicked = () => {
    setOrderSummary(false);
  };
  const onPaid = () => {
    props.onPaid(tempBillingAnnually);
  };

  let contentStyle = {
    padding: "0 15%",
  };
  let orderSummaryData = props.getOrderSummaryData(tempBillingAnnually);
  const getTitleText = () => {
    if (showOrderSummary && !props.isAlreadySet) return "Order Summary";
    else if (showOrderSummary && props.isAlreadySet) return "Change Plan";
    else return "Payment";
  };
  return (
    <div className={styles.orderSubscriptionWrapper}>
      <div className={styles.header}>
        <HeaderText onCancel={props.onClose} titleText={getTitleText()} />
      </div>
      <div className={styles.contentWrapper}>
        {!showOrderSummary ? (
          <PaymentDetails
            onClose={props.onClose}
            totalAmount={orderSummaryData.totalAmount}
            onPay={onPaid}
            contentStyle={contentStyle}
          />
        ) : null}
        {showOrderSummary ? (
          <OrderSummary
            data={orderSummaryData}
            onProceed={onProceedClicked}
            onChangePlan={() => props.onChangePlan(tempBillingAnnually)}
            onCancelPlan={props.onCancelPlan}
            isAlreadySet={props.isAlreadySet}
            contentStyle={contentStyle}
            onClose={props.onClose}
            isAnnualBilling={tempBillingAnnually}
            billingStatusChanged={(val: boolean) => setTempBillingAnnually(val)}
            currentPackage={props.currentPacakge}
          />
        ) : null}
      </div>
    </div>
  );
};
export default OrderSubscriptionPage;
