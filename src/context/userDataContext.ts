import React from "react";
export interface UserInfo {
  firstName: string;
  lastName: string;
}
const value: {
  imageSrc: string;
  userData: UserInfo;
  setImageSrc: (input: string) => any;
  setUserInfo: (data: UserInfo) => any;
} = {
  imageSrc: "",
  userData: { firstName: "", lastName: "" },
  setImageSrc: (imageSrc: string) => {},
  setUserInfo: (userData: UserInfo) => {},
};
const userDataContext = React.createContext(value);
export default userDataContext;
