import React from "react";

export default function Select({ label, options, name, ...otherProps }) {
  return (
    <div className="select-container">
      <label>{label}</label>
      <select name={name} className="select-container__select" {...otherProps}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
