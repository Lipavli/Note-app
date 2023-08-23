import React, { ButtonHTMLAttributes } from "react";
import styles from './MyButton.module.css'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
}
const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;