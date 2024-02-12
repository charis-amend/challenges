import styled from "styled-components";

export const StyledHeading = styled.h4`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledForm = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1.5rem;
  justify-items: center;
  padding: 0;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: var(--color-nemo);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
  margin-bottom:40px;

  &:hover {
    background-color: green;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.2);
  }
`;