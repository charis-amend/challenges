import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  const reviews = data.reviews
  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {reviews.map((review) => (
        <>
          <h6 key={review.id} >
            {review.title}
          </h6>
          <p>{review.text}</p>
          <p>{review.rating}</p>
        </>
      ))}


      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
