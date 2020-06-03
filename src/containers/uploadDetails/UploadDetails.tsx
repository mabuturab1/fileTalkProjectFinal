import React, { useState } from "react";
import styles from "./UploadDetails.module.scss";
import Button from "../../components/input/button/Button";
import UploadTile, {
  UploadTileProps,
} from "../../components/uploadTile/UploadTile";
import Folder from "../../assets/images/Folder.png";
import Image from "../../assets/images/Image.png";
import Image1 from "../../assets/images/Image1.png";
import Image2 from "../../assets/images/Image2.png";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
const UploadDetails = (props: any) => {
  const breadCrumbSections = [
    { key: "home", content: "Home", link: true },
    { key: "search", content: "Market Research", active: true },
  ];
  const [files] = useState<UploadTileProps[]>([
    {
      src: Folder,
      title: "Videos",
      isFolder: true,
      toLink: routes.uploadDetails,
    },
    {
      src: Folder,
      title: "Images",
      isFolder: true,
      toLink: routes.uploadDetails,
    },
    { src: Image, size: "15MB", toLink: routes.fileView },
    {
      src: Image1,
      title: "Guide for living in Sans Fransciso.pptx",
      toLink: routes.fileView,
    },
    { src: Image2, size: "15MB", toLink: routes.fileView },
    { src: Image, size: "15MB", toLink: routes.fileView },
  ]);
  var list = [];
  for (let i = 0; i < files.length; i++) {
    list.push(
      <Link key={i} to={files[i].toLink}>
        <div className={styles.singleUploadTile}>
          <UploadTile {...files[i]} />
        </div>
      </Link>
    );
  }
  return (
    <div className={styles.uploadDetailsWrapper}>
      <div className={styles.buttonWrapper}>
        <div className={styles.newFolderWrapper}>
          <Button label={"New folder"} type={"basic"} />
        </div>
        <div className={styles.upArrow}>
          <Button icon={"arrow up"} type={"basic"} />
        </div>
        <div className={styles.breadCrumb}>
          <BreadCrumb sections={breadCrumbSections} />
        </div>
      </div>
      <div className={styles.contentWrapper}>{list}</div>
    </div>
  );
};
export default UploadDetails;
