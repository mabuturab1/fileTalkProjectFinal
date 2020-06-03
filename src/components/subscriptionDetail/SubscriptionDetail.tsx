import React, { useContext } from "react";
import styles from "./SubscriptionDetail.module.scss";
import {
  SubscriptionItem,
  SubscrptionTextSize,
  HeaderItem,
} from "../../interfaces/interfaceList";
import { Icon } from "semantic-ui-react";
import Button from "../input/button/Button";
import SubscriptionContext, {
  CurrentPackage,
} from "../../context/subscriptionContext";
interface SupscriptionDetailsProps {
  item?: SubscriptionItem;
  value: CurrentPackage;
  isAlreadySet: boolean;
  isNotSubscribed: string;
  changePlanClicked: (val: CurrentPackage) => any;
}
const Subscription = (props: SupscriptionDetailsProps) => {
  const subscriptionContext = useContext(SubscriptionContext);
  const headerItems: any[] = [];
  if (props.item != null && props.item.header != null) {
    let vals = Object.values(props.item.header);
    vals.forEach((el, i) => {
      let style = styles.mainText;
      if ((el as HeaderItem).textSize === SubscrptionTextSize.MEDIUM)
        style = styles.mediumText;
      if ((el as HeaderItem).textSize === SubscrptionTextSize.SMALL)
        style = styles.smallText;

      headerItems.push(
        <h4 key={i} className={style}>
          {(el as HeaderItem).text}{" "}
          <sub className={styles.subscript}>{(el as HeaderItem).subText}</sub>
        </h4>
      );
    });
  }
  const subscriptionOffers: any[] = [];
  if (props.item?.offers != null) {
    for (let i = 0; i < props.item?.offers.length; i++) {
      subscriptionOffers.push(
        <li key={i} className={styles.singleOffer}>
          <span>
            <Icon name="check circle outline" />
          </span>
          {props.item.offers[i]}
        </li>
      );
    }
  }

  return (
    <div className={styles.subscriptionWrapper}>
      <div className={styles.header}>{headerItems}</div>
      <div className={styles.subscriptionOffers}>
        <div className={styles.buttonWrapper}>
          {subscriptionContext.defaultPackage !== props.value ? (
            <Button
              label={
                props.isAlreadySet ? props.isNotSubscribed : "Subscribe Now"
              }
              onClick={() => props.changePlanClicked(props.value)}
            />
          ) : (
            <Button
              onClick={() => props.changePlanClicked(props.value)}
              label={props.isAlreadySet ? "Subscribed" : "Current Plan"}
              backgroundColor={"#AAAAAA"}
            />
          )}
        </div>
        <ul className={styles.offersList}>{subscriptionOffers}</ul>
      </div>
    </div>
  );
};
export default Subscription;
