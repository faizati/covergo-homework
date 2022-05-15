import React from "react";

export default function PageBaseStructure({ children }) {
  return (
    <div className="box white-box">
      <div className="pages-container">{children}</div>
    </div>
  );
}
