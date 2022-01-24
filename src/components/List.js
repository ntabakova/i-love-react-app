import React from "react";
import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <React.Fragment>
      <h2>Available users:</h2>
      <ul className={styles.list}>
        {props.list.map((item) => (
          <ListItem key={item.id} data={item} />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
