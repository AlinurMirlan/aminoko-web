import { render, screen } from "@testing-library/react";
import { InputForm } from "../../../components/common/InputForm";
import React from "react";

describe("FormInput", () => {
  it("renders the label correctly", () => {
    const label = "Username";
    const id = "username";

    // Render the FormInput component with the provided label and id
    render(<InputForm label={label} id={id} />);

    // Get the label element by its associated text
    const labelElement = screen.getByLabelText(label);

    // Assert that the label element is in the document
    expect(labelElement).toBeInTheDocument();
  });

  it("renders the input correctly", () => {
    const label = "Username";
    const id = "username";

    // Render the FormInput component with the provided label and id
    render(<InputForm label={label} id={id} />);

    // Get the input element by its associated label text
    const inputElement = screen.getByLabelText(label);

    // Assert that the input element is in the document
    expect(inputElement).toBeInTheDocument();
  });

  it("renders the error message correctly", () => {
    const label = "Username";
    const id = "username";

    const error = { type: "required", message: "Username is required" };

    // Render the FormInput component with the provided label, id, and error
    render(<InputForm label={label} id={id} error={error} />);

    // Get the error message element by its associated text
    const errorMessage = screen.getByText(error.message);

    // Assert that the error message element is in the document
    expect(errorMessage).toBeInTheDocument();
  });

  it("forwards the ref correctly", () => {
    const label = "Username";
    const id = "username";

    // Create a ref for the input element
    const ref = React.createRef<HTMLInputElement>();

    // Render the FormInput component with the provided label, id, and ref
    render(<InputForm label={label} id={id} ref={ref} />);

    // Get the input element by its associated label text
    const inputElement = screen.getByLabelText(label);

    // Assert that the input element is the same as the ref's current value
    expect(inputElement).toBe(ref.current);
  });
});
