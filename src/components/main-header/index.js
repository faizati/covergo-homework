import React from "react";

export default function MainHeader({ content = "Please specify content!" }) {
  return <p className="main-header">{content}</p>;
}
