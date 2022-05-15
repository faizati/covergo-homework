import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Step2 from "./index";
import { BrowserRouter as Router } from "react-router-dom";
import { WizardContextState } from "../../hooks/wizards";

test("Step 2 page structure test cases", async () => {
  render(
    <WizardContextState>
      <Router>
        <Step2 />
      </Router>
    </WizardContextState>
  );
  const mainHeader = screen.getByText(/tell us about yourself/i);
  expect(mainHeader).toHaveTextContent("Tell us about yourself");
  const nameLabel = screen.getByText(/name/i);
  expect(nameLabel).toHaveTextContent("Name");
  const nameInput = screen.getByPlaceholderText("Your name");
  userEvent.type(nameInput, "Faiz");
  const ageInput = screen.getByPlaceholderText(/your age/i);
  userEvent.type(ageInput, "10");
  const live = screen.getByRole("combobox");
  userEvent.selectOptions(live, screen.getByRole("option", { name: "USA" }));
  expect(screen.getByRole("option", { name: "USA" }).selected).toBe(true);
  const standarPackage = screen.getByRole("radio", { name: /standard/i });
  expect(standarPackage).toBeInTheDocument();
  userEvent.click(standarPackage);
  let packagePremium = screen.getByText(/your premiums/i);
  expect(packagePremium).toHaveTextContent("Your premiums is : $300.00");
});
