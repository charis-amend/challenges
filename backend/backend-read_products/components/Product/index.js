import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
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
          <h3 key={review.id} >
            {review.title}
          </h3>
          <h5>{review.text}</h5>
          <h6>{review.rating}</h6>
        </>
      ))}


      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
