import styled from "styled-components";

export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;

export const StyledEditButton = styled.button`
padding: 10px 20px;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin:20px;

  &:hover {
    background-color: lightgrey;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`
export const StyledDeleteButton = styled.button`
padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin:20px;

  &:hover {
    background-color: rgb(231, 109, 137);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`