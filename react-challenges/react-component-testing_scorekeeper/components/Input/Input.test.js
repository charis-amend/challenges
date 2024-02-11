import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// 1. To check for attributes like placeholder or name, you can use the matcher toHaveAttribute(attributeName, value).
// 2. The Input component receives an onChange callback; in order to test it, remember that you have to mock if first.
// 3. You can check how often a function has been called with toHaveBeenCalledTimes(numberOfExpectedCalls).


test("renders a label and an input with the correct attributes", async () => {
    render(<Input
        labelText={labelText}
        id={name}
        name={name}
        placeholder={placeholder}
        type="text"
        value={value}
        onChange={onChange}
        required={required}
    />)

    const user = userEvent.setup();

    const labelText = screen.getByLabelText("Name")
    const placeholderInput = screen.toHaveAttribute("placeholder", { placeholder })
    const nameInput = screen.toHaveAttribute("name", { name })
    const valueInput = screen.toHaveAttribute("value", { value })
    const requiredInput = screen.toHaveAttribute("required", { required })


    await user.type(input, "some input text")

    const resultOfInput = screen.getByRole("heading", {
        name: "some input text", level: 2
    })

    expect(labelText).toBeInTheDocument();
    expect(placeholderInput).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(valueInput).toBeInTheDocument();
    expect(requiredInput).toBeInTheDocument();

});

test("calls callback on every user input", async () => { });
