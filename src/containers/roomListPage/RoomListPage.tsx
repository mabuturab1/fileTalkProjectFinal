import React, { useState } from "react";
import profileImage from "../../assets/images/UserImage.png";
import mainImage from "../../assets/images/PageImage.png";
import RoomList from "../../components/roomList/RoomList";
import styles from "./RoomListPage.module.scss";
import Button from "../../components/input/button/Button";
import IconInput from "../../components/input/iconInput/IconInput";
import { Link } from "react-router-dom";
import { RoomItemProps } from "../../interfaces/interfaceList";
import { routes } from "../../interfaces/routes";
const RoomListPage = (props: any) => {
  const [inputRoomList] = useState<RoomItemProps[]>([
    {
      mainImage: mainImage,
      titleList: ["Abcd", "Abcd"],
      subtitle: new Date().toISOString(),
      userList: [profileImage, profileImage, profileImage],
    },
    {
      mainImage: mainImage,
      titleList: ["Abcd", "Abcd"],
      subtitle: new Date().toISOString(),
      userList: [profileImage, profileImage, profileImage],
    },
  ]);
  return (
    <div className={styles.roomLisPageWrapper}>
      <Link to={routes.fileTalkMainPage}>
        <div className={styles.buttonWrapper}>
          <Button width={"100%"} height={"4rem"} label={"Start new filetalk"} />
        </div>
      </Link>
      <div className={styles.inputWrapper}>
        <IconInput
          placeholder={"Keywords to filter files"}
          onChange={(event) => {}}
        />
      </div>
      <RoomList roomList={inputRoomList} />
    </div>
  );
};
export default RoomListPage;
