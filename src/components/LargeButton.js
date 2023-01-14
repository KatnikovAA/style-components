import React from "react";
import styled from 'styled-components'
import { StyledButton } from "./Button";

//тут унаследовался от StyledButton 
const StyledLargeButton = styled(StyledButton)`
    font-size: 32px;
`
const LargeButton = (props) => {
    return <StyledLargeButton {...props}/>
};

export default LargeButton;