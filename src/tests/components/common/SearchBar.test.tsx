import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SearchBar } from "../../../components/common/SearchBar";
import jest from "jest-mock";
import { Provider } from "react-redux";
import { store } from "../../../data/store";

describe("SearchBar", () => {
  it("should render the input", () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render the input with the given placeholder", () => {
    render(
      <Provider store={store}>
        <SearchBar placeholder="Search" />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("should call the onChange handler when the input value changes", async () => {
    const onChange = jest.fn();
    render(
      <Provider store={store}>
        <SearchBar onChange={onChange} />
      </Provider>
    );
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Search");
    expect(onChange).toHaveBeenCalledTimes(6);
  });
});
