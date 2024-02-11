import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm></GameForm>)
  const inputfieldNameGame = screen.getByLabelText("Name of game")
  expect(inputfieldNameGame).toBeInTheDocument();
  const inputfieldPlayerNames = screen.getByLabelText("Player names, separated by comma")
  expect(inputfieldPlayerNames).toBeInTheDocument()
  const button = screen.getByRole("button", { name: "Create game" })
  expect(button).toBeInTheDocument()
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm></GameForm>)
  const form = screen.getByRole("form")
  const nameofForm = screen.getByRole("heading", { level: 2 }, { name: "Create a new game" })
  expect(form).toBeInTheDocument()
  expect(nameofForm).toBeInTheDocument()
});



test("submits the correct form data when every field is filled out", async () => {
  const mockSubmitHandle = jest.fn()
  render(<GameForm
    onCreateGame={mockSubmitHandle}></GameForm>)
  const user = userEvent.setup()
  const inputfieldNameGame = screen.getByLabelText("Name of game")
  const inputfieldPlayerNames = screen.getByLabelText("Player names, separated by comma")
  const button = screen.getByRole("button", { name: "Create game" })

  await user.type(inputfieldNameGame, "test");
  await user.type(inputfieldPlayerNames, "test1, test2, test3");
  await user.click(button)

  expect(mockSubmitHandle.mock.calls).toHaveLength(1)
  expect(mockSubmitHandle).toHaveBeenCalledWith({
    nameOfGame: "test",
    playerNames: [
      "test1",
      "test2",
      "test3",]
  })
});

test("does not submit form if one input field is left empty", async () => {
  const mockSubmitHandle = jest.fn()
  render(<GameForm
    onCreateGame={mockSubmitHandle}></GameForm>)
  const user = userEvent.setup()
  const inputfieldNameGame = screen.getByLabelText("Name of game")
  const inputfieldPlayerNames = screen.getByLabelText("Player names, separated by comma")
  const button = screen.getByRole("button", { name: "Create game" })

  // await user.type(inputfieldNameGame, "")
  await user.type(inputfieldPlayerNames, "test1, test2, test3");
  await user.click(button)

  expect(mockSubmitHandle.mock.calls).toHaveLength(0)
});
