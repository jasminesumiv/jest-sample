import Welcome from "./Welcome";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

describe("Test suite for Welcome", () => {
  test("Welcome file first text test", () => {
    render(<Welcome />);
    const textElement = screen.getByText("This is sample text");
    expect(textElement).toBeInTheDocument();
  });
  test("Welcome file second text test", () => {
    render(<Welcome />);
    const secondText = screen.getByText("This is second text");
    expect(secondText).toBeInTheDocument();
  });
  test("Welcome file but change text test", () => {
    render(<Welcome />);
    const buttonText = screen.getByRole("button");
    userEvent.click(buttonText);

    const secondText = screen.getByText("Changed");
    expect(secondText).toBeInTheDocument();
  });
});
