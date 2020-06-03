import React from "react";
import styles from "./FormField.module.scss";
import { Form, Input, Icon } from "semantic-ui-react";
interface formFieldProps {
  handleChange: any;
  value: string;
  error: string;
  elementConfig: { label?: string; placeholder: string; type?: string };
  name: string;
  touched: boolean;
  icon?: string;
  inputStyle?: any;
  labelStyle?: any;
  errorStyle?: any;
  isInputFullWidth?: boolean;
  customIcon?: string;
  maxWidthAuto?: boolean;
}
const formField = (props: formFieldProps) => {
  let labelStyle: any = {
    width: "10rem",
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
      marginBottom: "0.3rem",
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
  return (
    <Form.Field inline>
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
