import ListItem from "./ListItem";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.list.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default List;
