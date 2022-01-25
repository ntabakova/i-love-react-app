import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListItem.module.css";

const ListItem = (props) => {
  const navigate = useNavigate();
  const viewDetails = () => {
    navigate(`/list/${props.data.id}`);
  };
  const websiteLinkHandler = (e) => {
    e.stopPropagation();
  };
  const emailLinkHandler = (e) => {
    e.stopPropagation();
  };

  const content = (
    <React.Fragment>
      <div className={styles.line}>Name: {props.data.name}</div>
      <div className={styles.line}>Username: {props.data.username}</div>
      <div className={styles.line}>
        Email:{" "}
        <a href={`mailto:${props.data.email}`} onClick={emailLinkHandler}>
          {props.data.email}
        </a>
      </div>
      {props.inPage && (
        <div className={styles.line}>City: {props.data.address?.city}</div>
      )}
      {props.inPage && (
        <div className={styles.line}>Phone: {props.data.phone}</div>
      )}
      {props.inPage && (
        <div className={styles.line}>Company: {props.data.company?.name}</div>
      )}
      <div className={styles.line}>
        Website:&nbsp;
        <a
          href={`http://${props.data.website}`}
          target="_blank"
          rel="noreferrer"
          onClick={websiteLinkHandler}
          className={styles.website}
        >
          {props.data.website}
        </a>
      </div>
    </React.Fragment>
  );

  if (!props.inPage) {
    return (
      <li className={styles.list__item} onClick={viewDetails}>
        {content}
      </li>
    );
  }
  return <div className={styles.details}>{content}</div>;
};

export default ListItem;
