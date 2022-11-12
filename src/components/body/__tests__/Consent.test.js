import { render, screen, cleanup } from "@testing-library/react";
import { Consent } from "./../Consent";
import { BrowserRouter as Router } from "react-router-dom";

test("Consent test", () => {
  expect(true).toBe(true);
});

test("should render Consent", () => {
  render(
    <Router>
      <Consent />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-consent");
  expect(dashboardElement).toBeInTheDocument();
});

test("Consent component should have Consent text", () => {
  render(
    <Router>
      <Consent />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-consent");
  expect(dashboardElement).toHaveTextContent("Consent");
});

test.skip("Mock Consent function", () => {
  const consentClass = require("./../Consent");
  jest.mock("./consentClass");

  const mockMethod = jest.fn();
  SomeClass.mockImplementation(() => {
    return {
      method: mockMethod,
    };
  });

  const consented = new consentClass();
  consented.method("Consent", "Text");

  console.log("Calls to consent method: ", mockMethod.mock.calls);
});
