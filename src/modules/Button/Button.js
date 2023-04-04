import React from "react";

const Button = (props) => {
  const { 
    btnText,
    btnStyle,
    btnEvent,
    type,
    dataCy,
  } = props;
  const checkBtnStyle = btnStyle ? 'secondary_btn' : 'primary_btn';

  return (
    <>
      <button
        className={`btn ${checkBtnStyle}`}
        onClick={btnEvent}
        type={type}
        data-testid={'btn'}
        data-cy={dataCy}
      >
        {btnText}
      </button>
    </>
  )
}

export default Button;
