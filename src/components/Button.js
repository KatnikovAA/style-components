import React from "react";
import styled, { css } from 'styled-components'
// props primary спецальный просп для объеденения нескольких пропсов || Булиан тип 
export const StyledButton= styled.button.attrs(props =>({
    outlined:true, // через attrs можно создать дефолтные пропсы для обеденений 
}))`
border: none;
margin-top: ${props => props.marginTop || "0"};
padding: 10px 15px;
font-size: 18px;
cursor: pointer;
&:focus {
    outline: none;
}
align-self: ${props => props.align || 'stretch'};

${props => props.primary && css`
    color: ${props => props.color || "white"};
    background: ${props => props.background || "white"} 
`}

${props => props.outlined && css`
    color: ${props => props.color || 'white'};
    border: 1px solid ${props => props.color || "white"};
    background: transparent;
`}
`
// можно наследоваться от элемента и создавать свой ( в этом пример я создал LargeButton и его можно прокинуть в return вместо StyledButton {...props}/>)
// или я создал компонент  LargeButton и наследовался прям в нем и получил новый комопнент с этим стилями которые описал тут
const LargeButton = styled(StyledButton)`
    font-size: 32px;
`
export const Button = (props) => {
    return <StyledButton {...props}/>
};


