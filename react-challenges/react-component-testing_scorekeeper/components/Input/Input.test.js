import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// 1. To check for attributes like placeholder or name, you can use the matcher toHaveAttribute(attributeName, value).
// 2. The Input component receives an onChange callback; in order to test it, remember that you have to mock if first.
// 3. You can check how often a function has been called with toHaveBeenCalledTimes(numberOfExpectedCalls).


test("renders label and an input with the correct attributes", () => {
    render(<Input
        labelText={"exampleLabelText"}
        name={"exampleNameText"}
    />)
    const labelText = screen.getByLabelText("exampleLabelText")
    const nameInput = screen.getByRole("textbox")
    expect(labelText).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
});



test("The Input component receives an onChange callback when user type in input field", async () => {
    const handleChange = jest.fn()
    render(<Input onChange={handleChange} />)
    const user = userEvent.setup()
    const nameInput = screen.getByRole("textbox")
    await user.type(nameInput, "input with 24 characters")
    expect(handleChange).toHaveBeenCalledTimes(24);
    // needed to be called 24x because string has 24 characters.
});


