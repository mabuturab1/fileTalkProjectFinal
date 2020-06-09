import React from "react";
import styles from "./FormField.module.scss";
import { Form, Input, Icon } from "semantic-ui-react";
interface formFieldProps {
  handleChange: any;
  value: string;
  error?: string;
  elementConfig: { label?: string; placeholder: string; type?: string };
  name: string;
  touched: boolean;
  icon?: string;
  fieldWrapperStyle?: any;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  isInputFullWidth?: boolean;
  customIcon?: string;
  maxWidthAuto?: boolean;
  removeBorder?: boolean;
  acceptCustomWidth?: boolean;
  removeInputPadding?: "leftRight" | "topBottom" | "allSides";
}
const formField = (props: formFieldProps) => {
  let labelStyle: any = {
    width: "160px",
    color: "black",
  };
  let inputClasses = [styles.inputWrapper];
  let inputStyle: any = {
    width: "100%",
  };
  if (props.isInputFullWidth) {
    inputClasses.push(styles.fullWidth);
    labelStyle = {
      ...labelStyle,
      marginBottom: "5px",
    };
  }
  if (props.maxWidthAuto) inputClasses.push(styles.autoMaxWidth);

  labelStyle = {
    ...labelStyle,
    ...props.labelStyle,
  };
  inputStyle = {
    ...inputStyle,
    ...props.inputStyle,
  };
  if (props.removeBorder) inputClasses.push(styles.removeInputBorder);
  if (props.acceptCustomWidth) inputClasses.push(styles.removeMinMax);
  if (props.removeInputPadding)
    if (props.removeInputPadding === "leftRight") {
      inputClasses.push(styles.removeInputPaddingLeftRight);
    } else if (props.removeInputPadding === "topBottom")
      inputClasses.push(styles.removeInputPaddingTopBottom);
    else if (props.removeInputPadding === "allSides")
      inputClasses.push(styles.removeInputPadding);
  return (
    <Form.Field inline style={props.fieldWrapperStyle}>
      {props.elementConfig.label != null ? (
        <label className={styles.myLabel} style={labelStyle}>
          {props.elementConfig.label}
        </label>
      ) : null}
      <div className={inputClasses.join(" ")}>
        <Input
          icon={
            props.icon != null ? (
              props.icon
            ) : props.customIcon != null ? (
              <Icon className={props.customIcon} />
            ) : undefined
          }
          iconPosition={
            props.icon != null || props.customIcon != null ? "left" : undefined
          }
          style={inputStyle}
          name={props.name}
          onChange={props.handleChange}
          placeholder={props.elementConfig.placeholder}
          type={
            props.elementConfig.type != null ? props.elementConfig.type : "text"
          }
          value={props.value}
        />
        {props.error && props.touched && (
          <span className={styles.errorWrapper} style={props.errorStyle}>
            {props.error}
          </span>
        )}
      </div>
    </Form.Field>
  );
};
export default formField;
