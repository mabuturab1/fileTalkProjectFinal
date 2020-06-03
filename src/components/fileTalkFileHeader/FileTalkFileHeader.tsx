import React from "react";
import styles from "./FileTalkFileHeader.module.scss";
import { Icon } from "semantic-ui-react";
import Button from "../input/button/Button";
import CircularImage from "../circularImage/CircularImage";

import CircularImageList from "../circularImageList/CircularImageList";

import { History } from "history";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface FileTalkFileHeaderProps {
  numOffilesOpened?: number;
  fileTitle?: string;
  userImageList?: string[];
  userImage?: string;
  history?: History;
}
const fileTalkFileHeader = (props: FileTalkFileHeaderProps) => {
  const iconStyle = {
    color: "#888888",
    cursor: "pointer",
  };
  const handleGoBack = () => {
    if (props.history != null) props.history.goBack();
  };
  return (
    <div className={styles.fileTalkWrapper}>
      <div className={styles.leftWrapper}>
        <Icon
          onClick={handleGoBack}
          size="large"
          style={iconStyle}
          name="arrow left"
        />

        <p className={styles.fileStatus}>
          <Icon size="large" style={iconStyle} name="file" />
        </p>
        <p className={styles.fileStatus}>
          {props.numOffilesOpened}&nbsp; Files Opened
        </p>
      </div>
      <div className={styles.fileInfoWrapper}>
        <p className={styles.pageTitle}>{props.fileTitle}</p>
        <CircularImageList
          maxItems={3}
          srcList={props.userImageList != null ? props.userImageList : []}
        />
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
          <CircularImage src={props.userImage} />
        </div>
      </div>
    </div>
  );
};
export default fileTalkFileHeader;
