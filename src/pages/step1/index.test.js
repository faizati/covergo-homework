import React from "react";
import { render, screen } from "@testing-library/react";
import Step1 from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Step 1 Page Structure test cases", async () => {
  render(
    <Router>
      <Step1 />
    </Router>
  );
  const p = screen.getByText(/hello there/i);
  expect(p).toHaveTextContent("Hello There");
  const button = screen.getByRole("button", { name: /start/i });
  expect(button).toHaveTextContent("Start");
  expect(button).toBeEnabled();
});
