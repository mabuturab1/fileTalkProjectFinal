import React from "react";
import styles from "./searchBar.module.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
}
const searchBar = (props: SearchbarProps) => {
  const iconStyle = {
    opacity: 0.4,
  };
  return (
    <div className={styles.searchBarWrapper}>
      <Icon style={iconStyle} name="search" />
      <input
        className={styles.searchInput}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
      <span className={styles.clear}>clear</span>
      <Link to={routes.uploadDetails}>
        <span style={iconStyle} className={styles.close}></span>
      </Link>
    </div>
  );
};
export default searchBar;
