import React from "react";
import styles from "./CircularImageList.module.scss";
import CircularImage from "../circularImage/CircularImage";
interface CircularImageListProps {
  srcList: string[];
  maxItems: number;
}
const CircularImageList = (props: CircularImageListProps) => {
  var list = [];

  let maxItems = props.maxItems;
  maxItems = Math.min(maxItems, props.srcList.length);
  for (let i = 0; i < maxItems; i++) {
    list.push(
      <div key={i} className={styles.imageWrapper}>
        <CircularImage src={props.srcList[i]} />
      </div>
    );
  }
  let remainingItems = props.srcList.length - maxItems;
  if (remainingItems > 0)
    list.push(
      <div key={1000} className={styles.imageWrapper}>
        <CircularImage text={remainingItems + "+"} />
      </div>
    );
  return <div className={styles.circularImageWrapper}>{list}</div>;
};
export default CircularImageList;
