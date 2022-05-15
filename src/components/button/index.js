import React from "react";

export default function Button({ children, className, ...otherProps }) {
  return (
    <button className={`btn ${className}`} {...otherProps}>
      {children}
    </button>
  );
}
