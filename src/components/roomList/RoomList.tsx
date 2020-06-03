import React from "react";
import styles from "./RoomList.module.scss";
import RoomItem from "../RoomItem/RoomItem";
import { RoomItemProps } from "../../interfaces/interfaceList";
interface RoomListProps {
  roomList: RoomItemProps[];
}
const RoomList = (props: RoomListProps) => {
  let roomList: any[] = [];
  if (props.roomList != null) {
    for (let i = 0; i < props.roomList.length; i++)
      roomList.push(
        <div key={i} className={styles.roomItem}>
          <RoomItem
            titleList={props.roomList[i].titleList}
            userList={props.roomList[i].userList}
            subtitle={props.roomList[i].subtitle}
            mainImage={props.roomList[i].mainImage}
          />
        </div>
      );
  }

  return <div className={styles.roomList}>{roomList}</div>;
};
export default RoomList;
