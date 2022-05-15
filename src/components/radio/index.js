import React from "react";

export default function Radio({ options, name, value, ...otherOptions }) {
  return (
    <div className="input-container">
      {options.map((option) => (
        <div key={option.label}>
          <label htmlFor={option.value}>{option.label}</label>
          <input
            name={name}
            type="radio"
            className="input-container__input"
            id={option.value}
            checked={option.value === value}
            value={option.value}
            {...otherOptions}
          />
        </div>
      ))}
    </div>
  );
}
