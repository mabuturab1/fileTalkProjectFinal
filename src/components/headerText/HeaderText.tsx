import React from "react";
import styles from "./HeaderText.module.scss";
interface HeaderTextProps {
  titleText?: string;
  onCancel?: () => {};
  textColor?: string;
}
const settingsPageHeader = (props: HeaderTextProps) => {
  let style = {};
  if (props.textColor != null)
    style = {
      ...style,
      color: props.textColor,
    };
  return (
    <div className={styles.headerWrapper}>
      <p style={style} className={styles.titleText}>
        {props.titleText}
      </p>
      <span onClick={props.onCancel} className={styles.close}></span>
    </div>
  );
};
export default settingsPageHeader;
