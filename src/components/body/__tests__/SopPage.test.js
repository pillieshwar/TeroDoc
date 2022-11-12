import { render, screen, cleanup } from "@testing-library/react";
import { SopPage } from "./../SopPage";
import { BrowserRouter as Router } from "react-router-dom";

test("test", () => {
  expect(true).toBe(true);
});

window.URL.createObjectURL = function () {};

test("should render SopPage", () => {
  render(
    <Router>
      <SopPage />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-sop");
  expect(dashboardElement).toBeInTheDocument();
});

test("SopPage component should have Statement of Purpose text", () => {
  render(
    <Router>
      <SopPage />
    </Router>
  );
  const dashboardElement = screen.getByTestId("testid-sop");
  expect(dashboardElement).toHaveTextContent("Statement of Purpose");
});

test.skip("Mock SopPage component and make calls", () => {
  const mockFn = jest
    .fn()
    .mockReturnValue("default")
    .mockReturnValueOnce("first call")
    .mockReturnValueOnce("second call");

  mockFn(); // 'first call'
  mockFn(); // 'second call'
  mockFn(); // 'default'
  mockFn(); // 'default'
});
