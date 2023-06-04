import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import Task from "../components/Task";

test("displays the task text", () => {
  render(<Task text={"text!"} category={"category!"} />);
});

test("displays the task category", () => {
  render(<Task text={"text!"} category={"category!"} />);
});

test("is removed from the list when the delete button is clicked", () => {
  render(<App />);
  const task = screen.queryByText(/Buy rice/);


  expect(screen.queryByText(/Buy rice/)).not.toBeInTheDocument();
});
