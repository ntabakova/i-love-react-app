import { useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  let navigate = useNavigate();
  const viewDetails = () => {
    navigate(`/list/${props.data.id}`);
  };
  const websiteLinkHandler = (e) => {
    e.stopPropagation();
  };

  return (
    <li className={styles.list__item} onClick={viewDetails}>
      <div>Name: {props.data.name}</div>
      <div>Username: {props.data.username}</div>
      <div>Email: {props.data.email}</div>
      <div>
        Website:
        <a
          href={`http://${props.data.website}`}
          target="_blank"
          rel="noreferrer"
          onClick={websiteLinkHandler}
        >
          {props.data.website}
        </a>
      </div>
    </li>
  );
};

export default ListItem;
