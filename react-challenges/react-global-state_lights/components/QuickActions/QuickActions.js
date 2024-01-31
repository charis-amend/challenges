import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({ lights, lightsAreOnCount, onHandleToggleAllOff, onHandleToggleAllOn }) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        disabled={lightsAreOnCount === 0}
        onClick={() => { onHandleToggleAllOff() }}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        disabled={lightsAreOnCount === 8}
        onClick={() => { onHandleToggleAllOn() }}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
