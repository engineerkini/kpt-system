import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import App from "./App";

test("renders login page by default", () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const loginElement = screen.getByText(/login/i);
  expect(loginElement).toBeInTheDocument();
});

test("renders dashboard when navigating to /dashboard", () => {
  window.history.pushState({}, "Dashboard", "/dashboard");
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  const dashboardElement = screen.getByText(/dashboard/i);
  expect(dashboardElement).toBeInTheDocument();
});
function expect(dashboardElement: any) {
  throw new Error("Function not implemented.");
}
