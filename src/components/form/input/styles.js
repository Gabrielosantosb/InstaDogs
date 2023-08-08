import styled from "styled-components";


export const InputStyle = styled.input`
    border: 1px, solid, #eee;
    display: block;
    /* width: 80%; */
    width: ${props => (props.width ? props.width : "80%")};
    font-size: 1rem;
    padding: 0.8rem;
    border-radius: 0.4rem;
    background: #eee;
    transition: 0.1s;
    &:hover{
        outline: none;
        border-color: #fb1;
        background: white;
        box-shadow: 0 0 0 3px #fea;
    &:focus{

    }
    }
`

export const Error = styled.p`
    color: #f31;
    font-size: 0.875rem ;
    margin-top: .25rem;
`