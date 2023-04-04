import React from "react";
// import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
  const { 
    btntext,
    btnStyle,
    onClick,
    type,
    dataCy,
    item,
    index,
  } = props;

  const checkBtnStyle = btnStyle ? 'secondary_btn' : 'primary_btn';
  const checkBtnTestId = item ? item : 'btn'

  return (
    <>
      <button
        className={`btn ${checkBtnStyle} `}
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
