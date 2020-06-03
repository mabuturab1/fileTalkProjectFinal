import React from "react";
import styles from "./UploadTile.module.scss";
import { Icon } from "semantic-ui-react";
export interface UploadTileProps {
  size?: string;
  title?: string;
  src?: string;
  isFolder?: boolean;
  toLink: string;
}
const uploadTile = (props: UploadTileProps) => {
  const iconStyle = {
    color: "#888888",
  };
  const classes = [styles.uploadTileWrapper];
  if (props.isFolder) classes.push(styles.fullPadding);
  if (props.size == null)
    return (
      <div className={classes.join(" ")}>
        <img className={styles.imageStyle} src={props.src} alt="file" />
        <h6 className={styles.title}>{props.title}</h6>
      </div>
    );
  else {
    return (
      <div className={classes.join(" ")}>
        <img className={styles.imageStyle} src={props.src} alt="file" />
        <div className={styles.fileDetails}>
          <Icon style={iconStyle} name="download" size={"large"} />
          <h6>{props.size}</h6>
          <Icon style={iconStyle} name="ellipsis horizontal" size={"large"} />
        </div>
      </div>
    );
  }
};
export default uploadTile;
