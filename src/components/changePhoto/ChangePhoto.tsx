import React, { useContext, useState } from "react";
import styles from "./ChangePhoto.module.scss";
import HeaderText from "../headerText/HeaderText";
import ReactAvatarEditor from "react-avatar-editor";
import UserDataContext from "../../context/userDataContext";
import FileInput from "../fileInput/FileInput";
import Button from "../input/button/Button";
import BlankImage from "../../assets/images/blankImage.png";
interface ChangePhotoProps {
  imageSrc: string;
  onClose: any;
}
const ChangePhoto = (props: ChangePhotoProps) => {
  const userDataContext = useContext(UserDataContext);
  const [selectedFile, setSelectedFile] = useState<{
    isNew: boolean;
    imageSrc: string | File;
  }>({
    isNew: false,
    imageSrc: props.imageSrc,
  });

  const onFileSelect = (file: any) => {
    setSelectedFile({
      isNew: true,
      imageSrc: file,
    });
  };
  const onSaveChanges = () => {
    if (selectedFile.isNew) {
      if (selectedFile.imageSrc !== "")
        userDataContext.setImageSrc(URL.createObjectURL(selectedFile.imageSrc));
      else userDataContext.setImageSrc(BlankImage);
    }
    props.onClose();
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <HeaderText titleText="Change Photo" onCancel={props.onClose} />
      </div>
      <div className={styles.imageEditor}>
        <ReactAvatarEditor
          width={250}
          height={250}
          border={0}
          image={selectedFile.imageSrc}
        />
      </div>
      <div className={styles.linksWrapper}>
        <FileInput
          onFileSelect={onFileSelect}
          children={<p className={styles.changePhotoLink}>Upload</p>}
        />
        <p
          className={styles.changePhotoLink}
          onClick={() =>
            setSelectedFile({
              isNew: true,
              imageSrc: "",
            })
          }
        >
          Remove Photo
        </p>
      </div>
      <div className={styles.buttonWrapper}>
        <Button label={"Save Changes"} onClick={onSaveChanges} />
      </div>
    </div>
  );
};
export default ChangePhoto;
