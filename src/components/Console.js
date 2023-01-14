import React from "react";
import { useState } from "react";
import styled from 'styled-components'
import Flex from "./Flex";
import Line from "./Line";

const StyledConsole= styled.textarea`
width:100%;
height:70vh;
background: black;
font-size: 24px;
border: none;
resize: none;
color: ${props => props.color || props.theme.colors.primary};
&:focus {
    outline: none;
}
@media ${props => props.theme.media.phone} {
    border: 1px solid red;
}
@media ${props => props.theme.media.tablet} {
    border: 1px solid green;
}
`
const Console = (props) => {
    const [lines, setLines] = useState(['C:/users/KatnikovAA/'])

    const pushEnter = (e) => {
        if (e.key =="Enter"){
            setLines([...lines,'C:/users/KatnikovAA/'])
        }
    }
    return (
        <Flex>
            <Flex direction={"column"} >
                {lines.map(line =>
                    <Line>{line}</Line>
                    )}
            </Flex>
            <StyledConsole onKeyPress={pushEnter} {...props}></StyledConsole>
        </Flex>
        )
};

export default Console;