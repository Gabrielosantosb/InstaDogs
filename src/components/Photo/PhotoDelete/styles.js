import styled from "styled-components";


export const DeleteButton = styled.button`
    background: #ddd;
    padding: 0.3rem;
    line-height: 1;
    border: 1px solid transparent;
    font-size: 0.875rem;
    cursor: pointer;
    border-radius: 0.4rem;
    transition: 0.1s;
    &:hover{
        outline: none;
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border: #333;
    }

`