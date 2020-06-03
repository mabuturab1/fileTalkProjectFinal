import React from "react";
import styles from "./fileList.module.scss";
import SingleFile, { SingleFileProps } from "../singleFile/singleFile";
import { Link } from "react-router-dom";
interface FileListProps {
  list: SingleFileProps[];
}
const fileList = (props: FileListProps) => {
  const list = [];
  for (let i = 0; i < props.list.length; i++) {
    list.push(
      <div key={i} className={styles.singleFileWrapper}>
        <Link to={props.list[i].toLink}>
          <SingleFile {...props.list[i]} />
        </Link>
      </div>
    );
  }
  return <div className={styles.fileListWrapper}>{list}</div>;
};
export default fileList;
