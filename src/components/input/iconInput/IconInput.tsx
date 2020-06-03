import React, { ChangeEvent } from "react";
import { Input, Icon } from "semantic-ui-react";
import styles from "./IconInput.module.scss";
interface IconInputProps {
  placeholder?: string;
  onChange?: (Event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}
const iconInput = (props: IconInputProps) => {
  let style: any = {
    width: "100%",
    height: "100%",
  };
  return (
    <div className={styles.iconInputWrapper}>
      <Input
        style={style}
        iconPosition="left"
        icon
        placeholder={props.placeholder}
      >
        <Icon name="search" />
        <input onChange={props.onChange} />

        <span className={styles.close}></span>
      </Input>
    </div>
  );
};
export default iconInput;
