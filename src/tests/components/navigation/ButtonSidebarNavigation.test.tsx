import { render, screen } from "@testing-library/react";
import { ButtonSidebarNavigation } from "../../../components/navigation/ButtonSidebarNavigation";
import { MemoryRouter } from "react-router-dom";

describe("ButtonSidebarNavigation", () => {
  it("renders the ButtonSidebarNavigation component", () => {
    render(
      <MemoryRouter>
        <ButtonSidebarNavigation
          to="home"
          Icon={() => <div />}
          onClick={() => {}}
        >
          Home
        </ButtonSidebarNavigation>
      </MemoryRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
