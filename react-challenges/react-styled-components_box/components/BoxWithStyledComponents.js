import styled from "styled-components"

export default function BoxWithStyledComponents({ $makeOtherBoxBlueProp }) {
    return (
        <StyledBox $makeOtherBoxBlueProp={$makeOtherBoxBlueProp} />
    )

}

const StyledBox = styled.div`
    width: 100px;
    height: 100px;
    margin: 2rem;
    background-color: ${function changeBoxColor({ $makeOtherBoxBlueProp }) {
        return ($makeOtherBoxBlueProp ? "blue" : "orange")
    }};
       
        &:hover {
        background-color: whitesmoke;
        }
        `