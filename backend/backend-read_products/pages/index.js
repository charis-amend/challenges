import ProductForm from "@/components/ProductForm";
import ProductList from "../components/ProductList";
import styled from "styled-components";
import useSWR from "swr";
import { useState } from "react";

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;

export default function HomePage() {
  const { mutate } = useSWR("/api/products")
  const [isEditMode, setIsEditMode] = useState(false)

  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, mutate } = useSWR(`/api/products/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (!data) {
    return;
  }

  const handleAddProduct = async (event) => {
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


  async function handleEditProduct(ev) {
    ev.preventDefault()
    const productData = new FormData(ev.target)
    const newProductData = Object.fromEntries(productData)
    const response = await fetch(`/api/products/${id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProductData)
      })
    if (response.ok) {
      response.status(200).JSON({ status: "edited successfully productData -> newProductData" });
      mutate();
    }
  }




  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <ProductForm
        onHandleAddProduct={handleAddProduct}
        onHandleEditProduct={handleEditProduct} />
      <ProductList />
    </>
  );
}
