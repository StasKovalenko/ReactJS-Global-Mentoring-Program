import React from "react";
import PropTypes from "prop-types";

import styles from "./Dialog.module.css"
import { Link } from "react-router-dom";

const Dialog = ({ children, title, onClose }) => {
  return (
    <>
      <Link to={'/'}><div className={styles.dialog_overlay} onClick={onClose}></div></Link>
      <div 
        className={`${styles.dialog_content} ${title === "Delete movie" ? styles.deleteDialogContent : null}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <Link to={'/'}><button onClick={onClose} className="dialogCloseBtn">x</button></Link>
        <h2 className="dialog_title">{title}</h2>
          {children}
      </div>
    </>
  );
};

Dialog.propTypes = {
  title: PropTypes.string.isRequired,
  children: function (children, title, index) {
    if(React.isValidElement(children[index])) {
      return new Error(`${title} isn't JSX!!!!!`);
    }
  },
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  title: "Don't recieve title",
  onClose: () => {console.log('This is a callback func');},
}

export default Dialog;
