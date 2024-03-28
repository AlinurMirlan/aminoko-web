import { render, screen } from "@testing-library/react";
import { ButtonNavigation } from "../../../components/navigation/ButtonNavigation";
import { MemoryRouter } from "react-router-dom";

describe("ButtonNavigation", () => {
  it("renders the ButtonNavigation component", () => {
    render(
      <MemoryRouter>
        <ButtonNavigation to="home" Icon={() => <div />} onClick={() => {}}>
          Home
        </ButtonNavigation>
      </MemoryRouter>
    );
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
