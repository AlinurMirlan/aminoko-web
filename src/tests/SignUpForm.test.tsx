import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignUpForm } from "../SignUpForm";
import { MemoryRouter } from "react-router-dom";

describe("SignUpForm", () => {
  test("renders form inputs and submit button", () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    // Ensure that the email input is rendered
    expect(screen.getByLabelText("Email Address")).toBeInTheDocument();

    // Ensure that the password input is rendered
    expect(screen.getByLabelText("Password")).toBeInTheDocument();

    // Ensure that the confirm password input is rendered
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();

    // Ensure that the sign up button is rendered
    expect(
      screen.getByRole("button", { name: /sign up/i })
    ).toBeInTheDocument();
  });

  test("displays error message for invalid data", async () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );

    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password");
    const submitButton = screen.getByRole("button");

    // Enter an invalid email
    await userEvent.type(emailInput, "invalid-email");

    // Enter a password
    await userEvent.type(passwordInput, "password123");

    // Enter a different confirm password
    await userEvent.type(confirmPasswordInput, "password456");

    // Click the submit button
    await userEvent.click(submitButton);

    // Ensure that the "Invalid email" error message is displayed
    expect(
      screen.getByText("Entered value does not match email format")
    ).toBeInTheDocument();

    // Ensure that the "Passwords do not match" error message is displayed
    expect(screen.getByText("Passwords do not match")).toBeInTheDocument();
  });
});
