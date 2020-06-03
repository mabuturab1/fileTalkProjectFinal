import React from "react";
import styles from "./Welcome.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface WelcomeProps {
  titleText: string;
  captionLink: string;
}
const welcome = (props: WelcomeProps) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.titleText}>{props.titleText}</h3>
      <div className={styles.captionLinkWrapper}>
        <Link to={routes.fileTalkMainPage}>
          <p className={styles.captionLink}>{props.captionLink}</p>
        </Link>
      </div>
    </div>
  );
};
export default welcome;
