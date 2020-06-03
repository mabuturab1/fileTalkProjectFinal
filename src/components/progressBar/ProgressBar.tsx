import React from "react";
import styles from "./ProgressBar.module.scss";
import { Progress } from "semantic-ui-react";
export interface ProgressBarProps {
  title: string;
  usedValue: string;
  totalValue: string;
  value: number;
}
const progressBar = (props: ProgressBarProps) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h6 className={styles.progressBarTitle}>{props.title}</h6>
        <div className={styles.progressBarWrapper}>
          <div className={styles.progressBar}>
            <Progress
              value={props.value != null ? props.value : 0.1}
              total={1}
              color={props.value > 1 ? "red" : "blue"}
            />
          </div>
          <h4 className={styles.progressBarLabel}>
            <span>{props.usedValue}</span>/<span>{props.totalValue}</span>
          </h4>
        </div>
      </div>
    </div>
  );
};
export default progressBar;
