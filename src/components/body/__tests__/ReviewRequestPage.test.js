import { render, screen, cleanup } from "@testing-library/react";
import { ReviewRequestPage } from "./../ReviewRequestPage";
import { BrowserRouter as Router } from "react-router-dom";

test("test", () => {
  expect(true).toBe(true);
});

window.URL.createObjectURL = function () {};

test("should render ReviewRequestPage", () => {
  render(
    <Router>
      <ReviewRequestPage />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-reviewRequestPage");
  expect(dashboardElement).toBeInTheDocument();
});

test("ReviewRequestPage component should have Review Request text", () => {
  render(
    <Router>
      <ReviewRequestPage />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-reviewRequestPage");
  expect(dashboardElement).toHaveTextContent("Review Request");
});
