import React from "react";
import styles from "./ConfirmationScreen.module.scss";
import HeaderText from "../headerText/HeaderText";
import Button from "../input/button/Button";
interface ConfirmationScreenProps {
  headerText: string;
  onClose: () => any;
  textList: string[];
  onConfirm: () => any;
}
const ConfirmationScreen = (props: ConfirmationScreenProps) => {
  let list: any[] = [];
  props.textList.forEach((el, i) => {
    list.push(
      <p key={i} className={styles.singleLine}>
        {el}
      </p>
    );
  });
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderText titleText={props.headerText} onCancel={props.onClose} />
      </div>
      <div className={styles.contentWrapper}>{list}</div>
      <div className={[styles.buttonWrapper, styles.alignStart].join(" ")}>
        <div className={styles.singleButtonWrapper}>
          <Button onClick={props.onClose} label={"Cancel"} />
        </div>
        <div className={styles.singleButtonWrapper}>
          <Button
            onClick={props.onConfirm}
            label={"Confirm"}
            backgroundColor={"#F17070"}
          />
        </div>
      </div>
    </div>
  );
};
export default ConfirmationScreen;
