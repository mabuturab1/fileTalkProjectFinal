import React from "react";
import styles from "./Menu.module.scss";
import { Link } from "react-router-dom";
interface MenuProps {
  items: string[];
  activeItem: string;
  itemClicked: (item: string) => void;
  toLink: string[];
}
const menu = (props: MenuProps) => {
  let itemList: any[] = [];
  if (props.items != null) {
    for (let i = 0; i < props.items.length; i++) {
      let classes: string[] = [styles.singleItem];
      if (props.activeItem.toLowerCase() === props.items[i].toLowerCase())
        classes.push(styles.active);
      itemList.push(
        <Link key={i} to={props.toLink[i]}>
          <li
            className={classes.join(" ")}
            onClick={() => props.itemClicked(props.items[i])}
          >
            {props.items[i]}
          </li>
        </Link>
      );
    }
  }
  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.menuList}>{itemList}</ul>
    </div>
  );
};
export default menu;
