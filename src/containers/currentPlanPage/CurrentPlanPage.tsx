import React from "react";
import styles from "./CurrentPlanPage.module.scss";
import Button from "../../components/input/button/Button";
import { CurrentPackage } from "../../context/subscriptionContext";
export interface CurrentPlanProps {
  planType?: string;
  nextPayment?: string;
  renewDate?: string;
  changePlan?: () => any;
  currentPackage?: CurrentPackage;
  reActivePlan?: boolean;
}
const CurrentPlanPage = (props: CurrentPlanProps) => {
  return (
    <div className={styles.currentPlanWrapper}>
      <h6 className={styles.currentSubscriptionTitle}>
        Current subscription plan
      </h6>
      <div className={styles.planDetailsWrapper}>
        <div className={styles.planDetailsContent}>
          <div className={styles.contentWrapper}>
            <h6 className={styles.planType}>{props.planType}</h6>

            <div className={styles.singleDetail}>
              <h6 className={styles.singleDetailLabel}>Next Payment</h6>
              <h6 className={styles.singleDetailValue}>{props.nextPayment}</h6>
            </div>
            {!props.reActivePlan ? (
              <div className={styles.singleDetail}>
                <h6 className={styles.singleDetailLabel}>Renew Date</h6>
                <h6 className={styles.singleDetailValue}>{props.renewDate}</h6>
              </div>
            ) : (
              <div className={styles.singleDetail}>
                <h6 className={styles.singleDetailValue}>
                  The plan is validated until &nbsp;{props.renewDate}
                </h6>
              </div>
            )}
            {props.reActivePlan ? (
              <div className={styles.singleDetail}>
                <h6
                  style={{ color: "red" }}
                  className={styles.singleDetailValue}
                >
                  It will be expired on &nbsp;{props.renewDate}
                </h6>
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            onClick={props.changePlan}
            label={!props.reActivePlan ? "Change Plan" : "Re-activate plan"}
          />
        </div>
      </div>
    </div>
  );
};
export default CurrentPlanPage;
