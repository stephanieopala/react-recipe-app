import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ show, onClose, modalImg, modalInstructions, modalTitle }) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3 className={styles.title}>Name: {modalTitle}</h3>
        <h4>Cooking instructions</h4>
        <div className={styles.desc}>{modalInstructions}</div>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
export default Modal;
