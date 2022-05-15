import React from "react";
import { render, screen } from "@testing-library/react";
import Error from "./index";
import { BrowserRouter as Router } from "react-router-dom";

test("Step 1 Page Structure test cases", async () => {
  render(
    <Router>
      <Error />
    </Router>
  );
  const header = screen.getByText(/oops/i);
  expect(header).toHaveTextContent("Oops");
  const firstDescription = screen.getByText(/your age/i);
  expect(firstDescription).toHaveTextContent(
    "Your age is over our accepted limit!"
  );
  const secondDescription = screen.getByText(
    /we are sorry but we cannot insure you now/i
  );
  expect(secondDescription).toHaveTextContent(
    "We are sorry but we cannot insure you now"
  );
  const okButton = screen.getByRole("button", { name: /ok :\(/i });
  expect(okButton).toBeInTheDocument();
  expect(okButton).toBeEnabled();
  expect(okButton).toHaveTextContent("Ok :(");
});
