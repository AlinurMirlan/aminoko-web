import { render, screen, fireEvent } from "@testing-library/react";
import { SidebarPalette } from "../../../components/navigation/SidebarPalette";
import jest from "jest-mock";
import { MemoryRouter } from "react-router-dom";

describe("SidebarPalette", () => {
  it("renders the component", () => {
    render(
      <MemoryRouter>
        <SidebarPalette />
      </MemoryRouter>
    );
    // Add your assertions here to verify that the component is rendered correctly
  });

  it("calls handleTogglePanel when button is clicked", () => {
    const handleTogglePanel = jest.fn();
    render(
      <MemoryRouter>
        <SidebarPalette handleTogglePanel={handleTogglePanel} />
      </MemoryRouter>
    );
    const button = screen.getByText("Templates");
    fireEvent.click(button);
    expect(handleTogglePanel).toHaveBeenCalled();
  });
});
