import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

const testName = "player1"
const testScore = 123

test("renders player information and two buttons", () => {
    render(<Player
        name={testName}
        score={testScore} />)

    const playersNames = screen.getByText("player1")
    const score = screen.getByText(123)
    const buttonIncrease = screen.getAllByLabelText("Increase Score")
    const buttonDecrease = screen.getAllByLabelText("Decrease Score")
    expect(playersNames).toBeInTheDocument()
    expect(score).toBeInTheDocument()
    expect(buttonIncrease).toHaveLength(1)
    expect(buttonDecrease).toHaveLength(1)
});

test("calls callbacks when increasing or decreasing score", async () => {
    const handleDecrease = jest.fn()
    const handleIncrease = jest.fn()
    render(<Player
        onDecreasePlayerScore={handleDecrease}
        onIncreasePlayerScore={handleIncrease} ></Player>)
    const user = userEvent.setup()
    const buttonIncr = screen.getAllByRole("button", { name: "Increase Score" })
    const buttonDecr = screen.getAllByRole("button", { name: "Decrease Score" })

    await user.click(buttonDecr)
    await user.click(buttonIncr)
    expect(handleDecrease.mock.calls).toHaveBeenCalled(1)
    expect(handleIncrease.mock.calls).toHaveBeenCalled(1)

});
