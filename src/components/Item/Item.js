import React, { useState } from "react";
import styles from "./Item.module.css";
import Modal from "../../components/Modal/Modal";

const Item = ({ image, title, category, instructions }) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>Name: {title}</h3>
      <img className={styles.image} src={image} alt="meal" />
      <p>Category: {category}</p>
      <button onClick={() => setShow(true)}>View recipe</button>
      <Modal
        show={show}
        onClose={() => setShow(false)}
        modalImg={image}
        modalTitle={title}
        modalInstructions={instructions}
      />
    </div>
  );
};
export default Item;
