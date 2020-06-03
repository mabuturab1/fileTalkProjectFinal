import React, { useState, useContext } from "react";
import styles from "./SubscriptionPage.module.scss";
import CurrentPlanPage, {
  CurrentPlanProps,
} from "../currentPlanPage/CurrentPlanPage";
import SubscriptionPackagePage from "../subscriptionPackagePage/SubscriptionPackagePage";
import moment from "moment";
import {
  subscriptionItemsInit,
  getMonthPaymentText,
  getYearlyPaymentText,
} from "./subscriptionPageInitData";
import { SubscriptionItem } from "../../interfaces/interfaceList";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
import { OrderSummaryData } from "../../components/orderSummary/OrderSummary";

import OrderSubscriptionPage from "../orderSubscriptionPage/OrderSubscriptionPage";
import SemanticModal from "../../components/semanticModal/SemanticModal";

interface SubscriptionPageProps {
  onClose: () => any;
}
const SubscriptionPage = (props: SubscriptionPageProps) => {
  const [showCurrentPlan, setCurrentPlan] = useState<boolean>(false);
  const [showOrderDetails, setOrderDetails] = useState(false);
  const [tempSubscriptionStatus, setTempSubscriptionStatus] = useState({
    billingAnnually: false,
    currentPackage: CurrentPackage.Free,
  });
  let subscriptionItems = subscriptionItemsInit.slice();
  const subsContext = useContext(SubscriptionContext);
  let monthlyPrice = 14;
  let yearlyPrice = 9;

  const getSubscriptionDetails = (): SubscriptionItem[] => {
    let billingRate = subsContext.billingAnually ? yearlyPrice : monthlyPrice;
    let tempSubsItem = subscriptionItems.slice();
    let premiumItem = { ...tempSubsItem[1] };
    premiumItem.header.monthlyPrice.text = getMonthPaymentText(billingRate);
    if (premiumItem.header.annualPrice)
      premiumItem.header.annualPrice.text = getYearlyPaymentText(
        billingRate * 12
      );
    tempSubsItem[1] = premiumItem;
    return tempSubsItem;
  };

  const toggleOrderDetailsDialog = (val: boolean) => {
    // if (val) saveCurrentSubscriptionState();
    // else getBackOriginalSubscriptionState();
    setOrderDetails(val);
  };

  const getModal = (wrappedComponet: any) => {
    return (
      <SemanticModal
        open={true}
        size="tiny"
        style={{ backgroundColor: "white" }}
        children={wrappedComponet}
      />
    );
  };

  const changePlan = (val: CurrentPackage) => {
    // if (showCurrentPlan) {
    //   setOrderDetails(true);
    //   return;
    // }
    // subsContext.changeCurrentPackage(val);
    if (val === subsContext.defaultPackage) return;
    let newState = { ...tempSubscriptionStatus };
    newState.currentPackage = val;
    setTempSubscriptionStatus(newState);
    toggleOrderDetailsDialog(true);
  };

  const getCurrentPlan = () => {
    let currentplan: CurrentPlanProps = {
      planType: "Free",
      nextPayment: "0$",
      renewDate: moment().format("MMMM-DD,YYYY"),
      currentPackage: subsContext.defaultPackage,
    };
    let nextDateInc = subsContext.billingAnually
      ? moment().add(1, "years")
      : moment().add(1, "months");
    if (subsContext.billingAnually) {
      currentplan.planType = "Personal annual subscription plan";
    } else currentplan.planType = "Presonal monthly subscription plan";
    if (subsContext.defaultPackage === CurrentPackage.Premium) {
      let data = getSubscriptionDetails()[1];
      if (data.header.annualPrice)
        currentplan.nextPayment = subsContext.billingAnually
          ? `$${yearlyPrice * 12}`
          : `$${monthlyPrice}`;
    }
    currentplan.renewDate = nextDateInc.format("MMMM-DD,YYYY");
    return currentplan;
  };

  const getOrderSummary = (annualSubscription: boolean) => {
    let nextDateInc = annualSubscription
      ? moment().add(1, "years")
      : moment().add(1, "months");
    let currentplan: OrderSummaryData = {
      plan: "Free",
      totalAmount: "0$",
      startingDate: "Immediatey",
      renewDate: nextDateInc.format("MMMM-DD,YYYY"),
      pricePerMonth: "$0",
    };
    if (annualSubscription) {
      currentplan.plan = "Personal annual subscription plan";
    } else currentplan.plan = "Presonal monthly subscription plan";
    if (tempSubscriptionStatus.currentPackage === CurrentPackage.Premium) {
      currentplan.totalAmount = `$${
        annualSubscription ? yearlyPrice * 12 : monthlyPrice
      }`;
      currentplan.pricePerMonth = `$${
        annualSubscription ? yearlyPrice : monthlyPrice
      }`;
    }
    currentplan.discountFigure =
      Math.round(
        (100 * (monthlyPrice - yearlyPrice)) / monthlyPrice
      ).toString() + " %";
    return currentplan;
  };
  const onPaid = (annualBilling: boolean) => {
    updateAppState(annualBilling);
    setCurrentPlan(true);
    setOrderDetails(false);
  };
  const onChangePlan = (annualBilling: boolean) => {
    updateAppState(annualBilling);
    setOrderDetails(false);
  };
  const updateAppState = (annualBilling: boolean) => {
    setTempSubscriptionStatus({
      billingAnnually: annualBilling,
      currentPackage: tempSubscriptionStatus.currentPackage,
    });

    subsContext.isAnnualBilling(annualBilling);
    subsContext.changeCurrentPackage(tempSubscriptionStatus.currentPackage);
  };
  const onCancelPlan = () => {
    setOrderDetails(false);
    subsContext.changeCurrentPackage(CurrentPackage.Free);
  };
  return (
    <div className={styles.wrapper}>
      {showOrderDetails
        ? getModal(
            <OrderSubscriptionPage
              getOrderSummaryData={(annualSubscription: boolean) =>
                getOrderSummary(annualSubscription)
              }
              onClose={() => toggleOrderDetailsDialog(false)}
              onPaid={onPaid}
              isAlreadySet={showCurrentPlan}
              onChangePlan={onChangePlan}
              onCancelPlan={onCancelPlan}
              currentPacakge={tempSubscriptionStatus.currentPackage}
            />
          )
        : null}

      {showCurrentPlan && (
        <div className={styles.currentPlan}>
          <CurrentPlanPage
            changePlan={() => toggleOrderDetailsDialog(true)}
            reActivePlan={subsContext.defaultPackage === CurrentPackage.Premium}
            {...getCurrentPlan()}
          />
        </div>
      )}
      <div className={styles.subscriptionPackage}>
        <SubscriptionPackagePage
          subscriptionItems={getSubscriptionDetails()}
          changePlan={changePlan}
          isAlreadySet={showCurrentPlan}
        />
      </div>
    </div>
  );
};
export default SubscriptionPage;
