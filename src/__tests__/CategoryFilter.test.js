import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CategoryFilter from "../components/CategoryFilter";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} />);
  for (const category of CATEGORIES) {
    
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  render(<App />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
  const allButton = screen.queryByRole("button", { name: "All" });

  

  
});

test("clicking the category button filters the task list", () => {
  render(<App />);

  const codeButton = screen.queryByRole("button", { name: "Code" });
 
});

test("displays all tasks when the 'All' button is clicked", () => {
  render(<App />);

  const allButton = screen.queryByRole("button", { name: "All" });


});
