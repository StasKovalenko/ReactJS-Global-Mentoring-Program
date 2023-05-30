import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"

import './Dialog.css'
import { Link } from "react-router-dom";

const Dialog = ({ children, title, onClose }) => {
  return (
    <ErrorBoundary>
      <Link to={'/'}><div className="dialog-overlay" onClick={onClose}></div></Link>
      <div 
          className={`dialog-content ${title === "Delete movie" ? "deleteDialogContent" : null}`} 
          onClick={(e) => e.stopPropagation()}
        >
          <Link to={'/'}><button onClick={onClose} className="dialogCloseBtn">x</button></Link>
          <h2 className="dialog-title">{title}</h2>
          {children}
        </div>
    </ErrorBoundary>
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
