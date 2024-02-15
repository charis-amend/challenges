import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard, StyledEditButton, StyledDeleteButton } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { useState } from "react";
import ProductForm from "../ProductForm";

export default function Product(
  {
    onHandleEdit,
    setIsEditMode,
    isEditMode,
    data
  }
) {

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.map((review) => (
        <>
          <h3 key={review.id} >
            {review.title}
          </h3>
          <h5>{review.text}</h5>
          <h6>{review.rating}</h6>
        </>
      ))}

      {!isEditMode &&
        <ProductForm onSubmit={onHandleEdit}
        />
      }

      <StyledEditButton
        onClick={() => { setIsEditMode(!isEditMode) }}
      >Edit ✏️</StyledEditButton>
      <StyledDeleteButton>Delete 🗑️</StyledDeleteButton>

      <br />
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
