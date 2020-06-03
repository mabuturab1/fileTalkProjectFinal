import React from "react";
import styles from "./singleFile.module.scss";
import { Icon } from "semantic-ui-react";
export interface SingleFileProps {
  fileName?: string;
  fileSize?: string;
  author?: string;
  date?: string;
  src?: string;
  toLink: string;
}
const singleFile = (props: SingleFileProps) => {
  const iconStyle = {
    opacity: 0.8,
    color: "#555555",
  };
  return (
    <div className={styles.singleFileWrapper}>
      <img className={styles.imageStyle} src={props.src} alt="file" />
      <div className={styles.fileInfo}>
        <div className={styles.fileDetails}>
          <div className={styles.nameWrapper}>
            <h6 className={styles.name}>{props.fileName}</h6>
            <h6 className={styles.size}>{props.fileSize}</h6>
          </div>
          <div className={styles.detailsWrapper}>
            <h6 className={styles.author}>{props.author}</h6>
            <h6 className={styles.date}>{props.date}</h6>
          </div>
        </div>
        <div className={styles.fileInfoOptions}>
          <div className={styles.iconStyle}>
            <Icon style={iconStyle} name="download" />
          </div>
          <div className={styles.iconStyle}>
            <Icon style={iconStyle} name="ellipsis horizontal" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default singleFile;
