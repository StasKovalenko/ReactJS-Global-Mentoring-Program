import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout = ({ children }) => {
  return (
    <ErrorBoundary>
        {children}
    </ErrorBoundary>
  )
};

export default Layout;