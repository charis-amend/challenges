import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

// mock the onChange callback:
jest.mock("testing the onChange Callback mocking it first:", () => ({
    onchange() {
        return { pathname: jest.fn() }
    }
}))

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
