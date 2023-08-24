import React, { useState } from "react";
import styles from "../styles/DescriptionModal.module.css";

interface DescriptionModalProps {
  description: string;
  showModal: boolean;
}

const DescriptionModal = ({
  description,
  showModal,
}: DescriptionModalProps) => {
  
  return (
    <div className={styles.modalContainer}>
      {showModal && <div>{description}</div>}
    </div>
  );
};
export default DescriptionModal;
