import React from "react";
import styles from "./fileTalkHeader.module.scss";
import { Icon } from "semantic-ui-react";
import Button from "../input/button/Button";
import CircularImage from "../circularImage/CircularImage";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface FileTalkHeaderProps {
  userName?: string;
  userStatus?: string;
  src: string;
}
const fileTalkHeader = (props: FileTalkHeaderProps) => {
  return (
    <div className={styles.fileTalkWrapper}>
      <div className={styles.userInfo}>
        <Link to={routes.mainPage}>
          <Icon name="home" />
        </Link>
        <p className={styles.userName}>{props.userName}</p>
        <p className={styles.userStatus}>{props.userStatus}</p>
      </div>
      <div className={styles.userOptions}>
        <Link to={routes.searchResultsPage}>
          <div className={styles.iconStyle}>
            <Icon style={{ color: "#bbbbbb" }} size="large" name="search" />
          </div>
        </Link>
        <div className={styles.iconStyle}>
          <Icon
            style={{ color: "#bbbbbb" }}
            size="large"
            name="ellipsis horizontal"
          />
        </div>
        <div className={styles.singleButton}>
          <Button label={"Share"} />
        </div>
        <div className={styles.singleButton}>
          <Button label={"Login"} type={"basic"} color={"#708CF1"} />
        </div>
        <div className={styles.profileImage}>
          <CircularImage src={props.src} />
        </div>
      </div>
    </div>
  );
};
export default fileTalkHeader;
