import React, { useContext } from "react";
import styles from "./SubscriptionPackagePage.module.scss";

import ToggleButton from "../../components/toggleButton/ToggleButton";
import { SubscriptionItem } from "../../interfaces/interfaceList";
import SubscriptionDetail from "../../components/subscriptionDetail/SubscriptionDetail";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
interface SubscriptionPackageProps {
  subscriptionItems: SubscriptionItem[];
  isAlreadySet: boolean;
  changePlan: (val: CurrentPackage) => any;
}
const SubscriptionPackagePage = (props: SubscriptionPackageProps) => {
  const subsContext = useContext(SubscriptionContext);

  const billedAnuallyChanged = () => {
    if (props.isAlreadySet) return;
    let prevState = subsContext.billingAnually;
    let newState = !prevState;

    subsContext.isAnnualBilling(newState);
  };
  return (
    <div className={styles.wrapper}>
      <ToggleButton
        label={"Billed Annually"}
        onChange={(e, d) => billedAnuallyChanged()}
        checked={subsContext.billingAnually}
      />

      <div className={styles.subscriptionWrapper}>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail
            item={props.subscriptionItems[0]}
            value={CurrentPackage.Free}
            changePlanClicked={props.changePlan}
            isAlreadySet={props.isAlreadySet}
            isNotSubscribed={"Downgrade"}
          />
        </div>
        <div className={styles.singleSubscription}>
          <SubscriptionDetail
            item={props.subscriptionItems[1]}
            value={CurrentPackage.Premium}
            changePlanClicked={props.changePlan}
            isAlreadySet={props.isAlreadySet}
            isNotSubscribed={"Upgrade"}
          />
        </div>
      </div>
    </div>
  );
};
export default SubscriptionPackagePage;
