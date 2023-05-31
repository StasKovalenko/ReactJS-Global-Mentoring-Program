import React from "react";

import styles from './Button.module.css'

const Button = (props) => {
  const { 
    btntext,
    btnstyle,
    onClick,
    type,
    dataCy,
    item,
    index,
    className,
  } = props;

  const checkBtnStyle = btnstyle ? styles.secondary_btn : styles.primary_btn;
  const checkBtnTestId = item ? item : 'btn'

  return (
    <>
      <button
        className={`${styles.btn} ${checkBtnStyle || className} `}
        onClick={onClick}
        type={type}
        data-testid={checkBtnTestId}
        data-value={item}
        data-index={index}
        data-cy={dataCy}
        {...props}
      >
        {btntext}
      </button>
    </>
  )
}

export default Button;
