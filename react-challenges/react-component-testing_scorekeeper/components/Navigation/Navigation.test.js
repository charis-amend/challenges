import { render, screen } from "@testing-library/react";
import Navigation from ".";
import StyledLink from "."

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("tests if navigation bar shows up:", () => {
  render(<Navigation />);
  const navigation = screen.getByRole("navigation")
  expect(navigation).toBeInTheDocument();
})

test("renders with two links 'Play' and 'History'", () => {
  render(<Navigation />)
  const playButtonLink = screen.getByRole("link", { name: "Play" })
  const historyButtonLink = screen.getByRole("link", { name: "History" })

  expect(playButtonLink).toBeInTheDocument();
  expect(historyButtonLink).toBeInTheDocument();
});

