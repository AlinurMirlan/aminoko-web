import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Dropdown } from "../../../components/common/Dropdown";

const options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

describe("Dropdown", () => {
  it("should render the title", () => {
    render(<Dropdown title="Title" options={options} />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });

  it("should render the options when the input is focused", async () => {
    render(<Dropdown title="Title" options={options} />);
    const input = screen.getByRole("textbox");
    await userEvent.click(input);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should render the selected option in the input", async () => {
    render(<Dropdown title="Title" options={options} />);
    const input = screen.getByRole("textbox");
    await userEvent.click(input);
    const option = screen.getByText("Option 1");
    await userEvent.click(option);
    expect(input).toHaveValue("Option 1");
  });
});
