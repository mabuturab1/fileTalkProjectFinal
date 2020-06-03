import React from "react";
import { Dropdown } from "semantic-ui-react";
import styles from "./Dropdown.module.scss";
interface DropdownProps {
  options: any[];
  name: string;
  placeholder: string;
  value: string;
  error: string;
  touched: boolean;
  onChange: () => any;
}
const MyDropdown = (props: DropdownProps) => {
  return (
    <div className={styles.dropdownWrapper}>
      <Dropdown
        placeholder={props.placeholder}
        fluid
        search
        selection
        value={props.value}
        name={props.name}
        id={props.name}
        options={props.options}
        onChange={props.onChange}
      />
      {props.error && props.touched && (
        <span className={styles.errorWrapper}>{props.error}</span>
      )}
    </div>
  );
};
export default MyDropdown;
