import React from "react";
import styles from "./Modal.module.scss";
interface ModalProps {
  height?: string;
  width?: string;
  removeBackdrop?: boolean;
  children?: any;
  zIndex?: number;
}
const Modal = (props: ModalProps) => {
  let classes = [styles.wrapper];
  let style = {};
  if (props.width != null)
    style = {
      ...style,
      width: props.width,
      height: props.width,
    };
  if (props.height != null)
    style = {
      ...style,
      height: props.height,
    };
  if (props.zIndex != null)
    style = {
      ...style,
      zIndex: props.zIndex,
    };
  if (props.removeBackdrop == null || props.removeBackdrop == false)
    classes.push(styles.backdrop);
  return (
    <div className={classes.join(" ")}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Modal;
