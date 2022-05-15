import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function ProgressBar() {
  const location = useLocation();
  const [pages] = useState([
    { id: 1, path: "/wizards/step1" },
    { id: 2, path: "/wizards/step2" },
    { id: 3, path: "/wizards/step3" },
  ]);

  return (
    <div className="progress-bar">
      {pages.map((page) => (
        <div
          className={`progress-bar__bar ${
            page.path == location.pathname && "active"
          }`}
          key={page.id}
        ></div>
      ))}
    </div>
  );
}
