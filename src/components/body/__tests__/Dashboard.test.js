import { render, screen, cleanup } from "@testing-library/react";
import { Dashboard } from "./../Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

test("test", () => {
  expect(true).toBe(true);
});

window.URL.createObjectURL = function () {};

test("should render dashboard", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-1");
  expect(dashboardElement).toBeInTheDocument();
});

test("dashboard component should have dashboard text", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-1");
  expect(dashboardElement).toHaveTextContent("Dashboard");
});
