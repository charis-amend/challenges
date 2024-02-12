import useSWR from "swr"
import { StyledHeading, StyledForm, StyledButton } from "./ProductForm.styled"

export default function ProductForm() {
    const { mutate } = useSWR("/api/products")

    const handleProductSubmit = async (event) => {
        event.preventDefault();
        console.log("-------------------  form submitted")
        const formData = new FormData(event.target)
        const productData = Object.fromEntries(formData)
        console.log("---- productData from Form:", productData)
        const response = await fetch("/api/products", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(productData)
        })
        if (response.ok) { mutate() }
    }
    return (

        <>
            <StyledHeading>Do you want to add some fishes?</StyledHeading>
            <StyledForm onSubmit={handleProductSubmit}>
                <label htmlFor="inputfish">Add your fish here:</label>
                <input name="name" type="text" id="inputfish" />
                <label htmlFor="inputprice">Set the price:</label>
                <input name="price" type="number" id="inputprice" />
                <label htmlFor="inputdescription">Description:</label>
                <input name="description" type="text" id="inputdescription" />
                <StyledButton>Add Fish</StyledButton>
            </StyledForm>
        </>
    )
}