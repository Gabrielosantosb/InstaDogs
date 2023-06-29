import styled from "styled-components";


export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;

`


export const Button = styled.button`
text-decoration: none;
padding: 0.8rem 1.2rem;
box-sizing: border-box;
background-color: #fb1;
border-radius: 4px;
color: #764701;
/* margin: 12px 8px; */
cursor: pointer;
transition: 0.1s;
min-width: 8rem;
&:hover {
  
} &:focus{
    outline: none;
    box-shadow: 0 0 0 3px #fea,0 0 0 4px #fb1;

}&:disabled{
    opacity: 0.5rem;
    cursor: wait;

}
`;




