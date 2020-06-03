import React from "react";
import styles from "./FileViewPage.module.scss";
import FileTalkFileHeader from "../../components/fileTalkFileHeader/FileTalkFileHeader";
import profileImage from "../../assets/images/UserImage.png";
import docFrame from "../../assets/images/DocumentFrame.png";
import { withRouter } from "react-router-dom";
const FileViewPage = ({ history }: any) => {
  return (
    <div className={styles.fileViewWrapper}>
      <div className={styles.fileHeader}>
        <FileTalkFileHeader
          fileTitle={"Guide_TO_LIVING_IN_Sans_Francisco_Eternal.pptx"}
          numOffilesOpened={3}
          userImageList={[
            profileImage,
            profileImage,
            profileImage,
            profileImage,
            profileImage,
            profileImage,
          ]}
          userImage={profileImage}
          history={history}
        />
      </div>
      <div className={styles.docView}>
        <img src={docFrame} alt="document frame" />
      </div>
    </div>
  );
};
export default withRouter(FileViewPage);
