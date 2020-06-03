import React from "react";
import styles from "./RoomItem.module.scss";
import CircularImage from "../circularImage/CircularImage";
import { RoomItemProps } from "../../interfaces/interfaceList";

const roomItem = (props: RoomItemProps) => {
  let users: any[] = [];
  let title: any[] = [];
  if (props.titleList != null) {
    for (let i = 0; i < props.titleList.length; i++)
      title.push(
        <span key={i} className={styles.title}>
          {props.titleList[i]},&nbsp;
        </span>
      );
  }
  if (props.userList != null) {
    for (let i = 0; i < props.userList.length; i++)
      users.push(
        <div key={i} className={styles.userImage}>
          <CircularImage src={props.userList[i]} />
        </div>
      );
  }
  return (
    <div className={styles.wrapper}>
      <img className={styles.imageStyle} src={props.mainImage} alt="Room" />
      <div className={styles.textDetails}>
        <div className={styles.titleWrapper}> {title}</div>
        <p className={styles.subtitle}>{props.subtitle}</p>
      </div>
      <div className={styles.imageList}>{users} </div>
    </div>
  );
};
export default roomItem;
