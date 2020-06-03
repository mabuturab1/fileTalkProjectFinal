import React, { useState } from "react";
import styles from "./SettingsPage.module.scss";
import HeaderText from "../../components/headerText/HeaderText";
import Menu from "../../components/menu/Menu";
import { routes } from "../../interfaces/routes";

import AccountSummary from "../../components/accountSummary/AccountSummary";

import StorageSummary from "../../components/storageSummary/StorageSummary";
import SubscriptionPage from "../subscriptionPage/SubscriptionPage";
// import Modal from "../../components/modal/Modal";

import BillingPage from "../billingPage/BillingPage";
import SemanticModal from "../../components/semanticModal/SemanticModal";

interface SettingsPageProps {
  onClose: () => any;
  open: boolean;
  initScreen: string;
}
const SettingsPage = (props: SettingsPageProps) => {
  const [menuItem, setMenuItem] = useState(props.initScreen);

  const menuItemClicked = (item: string) => {
    setMenuItem(item);
  };

  const getPage = (pageName: string) => {
    switch (pageName) {
      case "Profile":
        return <AccountSummary />;
      case "Storage":
        return (
          <StorageSummary
            changePlanButton={() => setMenuItem("Subscription")}
          />
        );
      case "Subscription":
        return <SubscriptionPage onClose={props.onClose} />;
      case "Billing":
        return <BillingPage onClose={props.onClose} />;
      default:
        return <AccountSummary />;
    }
  };
  return (
    <div className={styles.settingsPageWrapper}>
      <SemanticModal
        open={true}
        size="large"
        style={{ backgroundColor: "white", minHeight: "90vh", width: "80vw" }}
      >
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <HeaderText onCancel={props.onClose} titleText={menuItem} />
          </div>
          <div className={styles.content}>
            <div className={styles.menuList}>
              <Menu
                activeItem={menuItem}
                items={["Profile", "Storage", "Subscription", "Billing"]}
                toLink={[
                  routes.mainPage,
                  routes.mainPage,
                  routes.mainPage,
                  routes.mainPage,
                ]}
                itemClicked={menuItemClicked}
              />
            </div>

            <div className={styles.pageWrapper}>{getPage(menuItem)}</div>
          </div>
        </div>
      </SemanticModal>
    </div>
  );
};
export default SettingsPage;
