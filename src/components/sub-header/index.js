import React from "react";

export default function SubHeader({ content = "Please specify content!" }) {
  return <p className="sub-header">{content}</p>;
}
