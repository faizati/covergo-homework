import React from "react";

export default function Input({ label, ...otherProps }) {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input className="input-container__input" {...otherProps} />
    </div>
  );
}
