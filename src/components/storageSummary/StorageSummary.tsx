import React, { useState } from "react";
import styles from "./StorageSummary.module.scss";
import ProgressBar, { ProgressBarProps } from "../progressBar/ProgressBar";

import Button from "../input/button/Button";

interface StorageSummaryProps {
  onClose?: () => any;
  changePlanButton: () => any;
}
const StorageSummary = (props: StorageSummaryProps) => {
  const [progressbarsList] = useState<ProgressBarProps[]>([
    {
      title: "Storage usages",
      totalValue: "100MB",
      usedValue: "1.0GB",
      value: 10,
    },
    {
      title: "Room count",
      totalValue: "17",
      usedValue: "25",
      value: 17 / 25,
    },
  ]);
  let progressbars = [];
  for (let i = 0; i < progressbarsList.length; i++) {
    progressbars.push(
      <div key={i} className={styles.singleProgressbar}>
        <ProgressBar {...progressbarsList[i]} />
      </div>
    );
  }
  let exceeded = false;
  let index = progressbarsList.findIndex((el) => el.value > 1);
  if (index >= 0) exceeded = true;
  return (
    <div className={styles.storageWrapper}>
      <h6 className={styles.titleText}>Storage usage</h6>
      <div className={styles.storageDetailsWrapper}>
        {progressbars}
        <div className={styles.buttonWrapper}>
          <Button
            onClick={props.changePlanButton}
            label={exceeded ? "Re-active plan" : "Upgrade"}
            type={"secondary"}
            width={"14rem"}
            height={"2.5rem"}
            style={{
              maxWidth: "14rem",
              width: "100%",
            }}
          />
        </div>
        {exceeded ? (
          <h6 className={styles.exceededText}>
            The overstorage and rooms will be deleted in 31 days
          </h6>
        ) : null}
      </div>
    </div>
  );
};
export default StorageSummary;
