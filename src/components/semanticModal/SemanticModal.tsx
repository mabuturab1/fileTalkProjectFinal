import React from "react";
import { Modal } from "semantic-ui-react";
interface SemanticModalProps {
  open?: boolean;
  size: "mini" | "tiny" | "small" | "large" | "fullscreen";
  style?: any;
  children: any;
}
const SemanticModal = (props: SemanticModalProps) => {
  let style = { backgroundColor: "white" };
  style = {
    ...style,
    ...props.style,
  };
  return (
    <Modal
      open={props.open != null ? props.open : true}
      basic
      size={props.size}
      style={style}
      centered={true}
    >
      <Modal.Content>{props.children}</Modal.Content>
    </Modal>
  );
};
export default SemanticModal;
