import React from "react";

export default function SummaryBox({ data }) {
  return (
    <div className="summary-box">
      <div className="summary-box__list">
        {/* <p>Name</p>
        <p>Faiz Asyraf</p> */}
        {data.map((d, i) => (
          <div key={i}>
            <p>{d.key}</p>
            <p>{d.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
