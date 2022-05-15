import React from "react";
import Button from "../button";

export default function PageNavigator({
  left = { title: "Please specify title", onClick: () => {} },
  right = { title: "Please specify title", onClick: () => {} },
}) {
  return (
    <div className="page-navigator">
      <Button type="button" className="default-btn" onClick={left.onClick}>
        {left.title}
      </Button>
      <Button type="submit" className="primary-btn" onClick={right.onClick}>
        {right.title}
      </Button>
    </div>
  );
}
