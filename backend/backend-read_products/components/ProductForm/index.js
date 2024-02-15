import { StyledHeading, StyledForm, StyledButton } from "./ProductForm.styled"

export default function ProductForm({ onHandleAddProduct,
    editingMode
}) {

    return (
        <>
            <StyledHeading>
                {editingMode ? "Change your Fish" : "Do you want to add some fishes?"}
            </StyledHeading>
            <StyledForm onSubmit={(event) => onHandleAddProduct(event)}>
                <label
                    htmlFor="inputfish"
                >
                    {editingMode ? "Change the name of your fish:" : "Add your fish here:"}
                </label>
                <input name="name" type="text" id="inputfish" />
                <label htmlFor="inputprice">
                    {editingMode ? "Change the price:" : "Set the price:"}
                </label>
                <input name="price" type="number" id="inputprice" />
                <label htmlFor="inputdescription">Description:</label>
                <input name="description" type="text" id="inputdescription" />
                <StyledButton type="submit">
                    {editingMode ? "Change Fish" : "Add Fish"}
                </StyledButton>
            </StyledForm>
        </>
    )
}