import React, { useState } from "react";
import styles from "./OrderSummary.module.scss";
import { Divider } from "semantic-ui-react";

import Button from "../input/button/Button";
import SemanticModal from "../semanticModal/SemanticModal";
import ToggleButton from "../toggleButton/ToggleButton";
import ConfirmationScreen from "../confirmationScreen/ConfirmationScreen";
import { CurrentPackage } from "../../context/subscriptionContext";
export interface OrderSummaryData {
  plan?: string;
  startingDate?: string;
  renewDate?: string;
  totalAmount?: string;
  pricePerMonth?: string;
  discountFigure?: string;
}
export interface OrderSummaryProps {
  data: OrderSummaryData;
  currentPackage: CurrentPackage;
  isAnnualBilling: boolean;
  billingStatusChanged: (val: boolean) => any;
  onClose?: () => any;
  onProceed?: () => any;
  onChangePlan?: () => any;
  onCancelPlan?: () => any;
  isAlreadySet?: boolean;
  contentStyle?: any;
}
const OrderSummary = (props: OrderSummaryProps) => {
  const [showConfirmationDialog, setConfirmationDialog] = useState(false);

  const billedAnuallyChanged = () => {
    let prevState = props.isAnnualBilling;
    let newState = !prevState;

    props.billingStatusChanged(newState);
  };
  const getDiscount = () => {
    return (props.isAlreadySet &&
      props.currentPackage === CurrentPackage.Premium) ||
      (props.isAnnualBilling &&
        props.currentPackage === CurrentPackage.Premium &&
        props.data.discountFigure !== null)
      ? `(${props.data.discountFigure} Discount)`
      : null;
  };
  const toggleConfirmationDialog = (val: boolean) => {
    setConfirmationDialog(val);
  };
  const onChangePlan = () => {
    toggleConfirmationDialog(false);
    if (props.onChangePlan) props.onChangePlan();
  };
  const onCancelPlan = () => {
    setConfirmationDialog(false);
    if (props.onCancelPlan) props.onCancelPlan();
  };
  return (
    <div className={styles.orderWrapper}>
      {showConfirmationDialog ? (
        <SemanticModal
          size={"tiny"}
          children={
            <ConfirmationScreen
              headerText={"Are you sure you want to Cancel Subscription"}
              onClose={() => toggleConfirmationDialog(false)}
              textList={[
                `Current plan: ${props.data.plan}`,
                `Your subscription will be ended in ${props.data.renewDate}`,
              ]}
              onConfirm={onCancelPlan}
            />
          }
        />
      ) : null}
      <div className={styles.orderContent} style={props.contentStyle}>
        <div className={styles.subscriptionDetails}>
          <ToggleButton
            labelStyle={{ fontWeight: "bold" }}
            label={"Billing Annually"}
            checked={props.isAnnualBilling}
            onChange={billedAnuallyChanged}
          />
          <span
            className={
              props.isAlreadySet
                ? [styles.discountStyle, styles.smallText].join(" ")
                : styles.discountStyle
            }
          >
            {getDiscount()}
          </span>
        </div>
        <ul className={styles.orderDetailList}>
          <li className={styles.singleItem}>
            <span className={styles.label}>Plan</span>
            <span className={styles.value}>{props.data.plan}</span>
          </li>
          {!props.isAlreadySet ? (
            <li className={styles.singleItem}>
              <span className={styles.label}>Starting Date</span>
              <span className={styles.value}>{props.data.startingDate}</span>
            </li>
          ) : (
            <li className={styles.singleItem}>
              <span className={styles.label}>Price</span>
              <span
                className={styles.value}
              >{`${props.data.pricePerMonth}`}</span>
              {props.data.discountFigure !== null &&
              props.isAnnualBilling &&
              props.currentPackage === CurrentPackage.Premium ? (
                <span
                  className={styles.value}
                >{`(discounted ${props.data.discountFigure})`}</span>
              ) : null}
            </li>
          )}
          <li className={styles.singleItem}>
            <span className={styles.label}>Renew Date</span>
            <span className={styles.value}>{props.data.renewDate}</span>
          </li>

          <Divider />
          <li className={styles.singleItem}>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              Billing
            </span>
            <span className={[styles.label, styles.bolderText].join(" ")}>
              {props.data.totalAmount}
            </span>
          </li>
        </ul>
      </div>
      {props.isAlreadySet ? (
        <div
          className={styles.cancelSubscription}
          onClick={() => toggleConfirmationDialog(true)}
        >
          <p className={styles.cancelSubscriptionText}>Cancel Subscription</p>
        </div>
      ) : null}
      {!props.isAlreadySet ? (
        <div className={styles.buttonWrapper}>
          <Button onClick={props.onProceed} width={"15rem"} label={"Proceed"} />
        </div>
      ) : (
        <div className={[styles.buttonWrapper, styles.alignStart].join(" ")}>
          <div className={styles.singleButtonWrapper}>
            <Button onClick={props.onClose} label={"Cancel"} />
          </div>
          <div className={styles.singleButtonWrapper}></div>
          <Button
            onClick={onChangePlan}
            label={"Confirm"}
            backgroundColor={"#F17070"}
          />
        </div>
      )}
    </div>
  );
};
export default OrderSummary;
