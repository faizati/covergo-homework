import React from "react";

export default function Description({ content = "Please specify content!" }) {
  return <p className="description">{content}</p>;
}
