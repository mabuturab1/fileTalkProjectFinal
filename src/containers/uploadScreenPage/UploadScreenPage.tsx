import React from "react";
import styles from "./UploadScreenPage.module.scss";
import Button from "../../components/input/button/Button";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
const UploadScreenPage = (props: any) => {
  return (
    <div className={styles.uploadScreenPageWrapper}>
      <div className={styles.newFolderWrapper}>
        <Button label={"New folder"} type={"basic"} />
      </div>
      <Link to={routes.uploadDetails}>
        <div className={styles.uploadButtonWrapper}>
          <Icon
            style={{ color: "#aaaaaa" }}
            name="cloud upload"
            size="massive"
          />
          <h6 className={styles.uploadButtonSubtitle}> Drop files to upload</h6>
        </div>
      </Link>
    </div>
  );
};
export default UploadScreenPage;
