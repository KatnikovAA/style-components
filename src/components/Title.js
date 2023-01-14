import React from "react";
import styled from 'styled-components'

// ${props => props.color} спецальный синтекса для передачи нужного цвета в копоненту
const StyledTitle = styled.h1`
color: ${props => props.color || props.theme.colors.primary};
`
//{children} - спецальный пропс для передачи чего либо ( в нашем лучае текст)

/*  - старая запись, что бы не передавать много пропсов мы просто разваричваем весь массим через ...props как ниже через ES6
const Title = ({children,color}) => {
    return (
        <StyledTitle color={color}>
            {children} 
        </StyledTitle>
    )
};

*/
// запись ниже это синтекс ES6
const Title = (props) => {
    return <StyledTitle {...props}/>
};

export default Title;