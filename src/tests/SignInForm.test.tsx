import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignInForm } from "../SignInForm";
import { MemoryRouter } from "react-router-dom";

describe("SignInForm", () => {
  test("renders email and password input fields", () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    // Verify that the email and password input fields are rendered
    const emailInput = screen.getByLabelText("Email Address");
    const passwordInput = screen.getByLabelText("Password");
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("renders a link to the signup page", () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    // Verify that a link to the signup page is rendered
    const signupLink = screen.getByRole("link", { name: "Sign up" });
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/auth/signup");
  });

  test("shows error messages when the form is submitted with invalid data", async () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    // Simulate form submission without entering any data
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    await userEvent.click(submitButton);

    // Verify that error messages for email and password are displayed
    const emailError = screen.getByText("Email is required");
    const passwordError = screen.getByText("Password is required");
    expect(emailError).toBeInTheDocument();
    expect(passwordError).toBeInTheDocument();
  });

  it("shows an error message when an invalid email is entered", async () => {
    render(
      <MemoryRouter>
        <SignInForm />
      </MemoryRouter>
    );

    // Enter an invalid email and submit the form
    const emailInput = screen.getByLabelText("Email Address");
    await userEvent.type(emailInput, "test");
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    await userEvent.click(submitButton);

    // Verify that an error message for invalid email is displayed
    const emailError = screen.getByText(
      "Entered value does not match email format"
    );
    expect(emailError).toBeInTheDocument();
  });
});
