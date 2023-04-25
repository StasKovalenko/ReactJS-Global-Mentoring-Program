import React from "react";
import PropTypes from "prop-types";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary"

import './Dialog.css'

const Dialog = ({ children, title, onClose }) => {
  return (
    <ErrorBoundary>
      <div className="dialog-overlay" onClick={onClose}>
      <div 
        className={`dialog-content ${title === "Delete movie" ? "deleteDialogContent" : null}`} 
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="dialogCloseBtn">x</button>
        <h2 className="dialog-title">{title}</h2>
        {children}
      </div>
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
