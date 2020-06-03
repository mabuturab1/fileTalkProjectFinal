import React from "react";
import styles from "./Header.module.scss";
import Button from "../input/button/Button";
import CircularImage from "../circularImage/CircularImage";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface HeaderProps {
  userName?: string;
  companyName: string;
  profileImage: string;
  upgradeNow: any;
}
const myheader = (props: HeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <Link to={routes.mainPage}>
        <div className={styles.logoName}>
          <h6 className={styles.logo}>
            {props.companyName != null ? props.companyName : ""}
          </h6>
        </div>
      </Link>
      <div className={styles.userDetails}>
        <div className={styles.upgradeButton} onClick={props.upgradeNow}>
          <Button
            type={"secondary"}
            label={"Upgrade now"}
            padding={["0.8rem", "4rem"]}
          />
        </div>

        <p className={styles.userName}>
          {props.userName != null ? props.userName : "User"}
        </p>
        <div className={styles.profileImage}>
          <CircularImage
            src={props.profileImage != null ? props.profileImage : ""}
          />
        </div>
      </div>
    </div>
  );
};
export default myheader;
