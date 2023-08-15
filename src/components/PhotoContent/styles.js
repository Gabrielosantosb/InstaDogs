import styled, { keyframes } from "styled-components";
import { ReactComponentElement as View} from "../../assets/visualizacao-black.svg";

const scaleUpAnimation = keyframes`
  to{
            opacity: initial;
            transform: initial;
        }

`;
export const PhotoContentContainer = styled.div`
  margin: auto;
  height: 36rem;
  border-radius: 0.2rem;
  background: white;
  display: grid;
  grid-template-columns: 36rem 20rem;
  grid-template-rows: auto 1fr auto;
  overflow: hidden;
  opacity: 0;
  transform: scale(0.8);
  animation: ${scaleUpAnimation} 0.2s ease-in-out forwards;

  @media (max-width: 64rem) {
    height: auto;
    max-height: calc(100vh -4rem);
    overflow-y: auto;
    grid-template-columns: minmax(20rem, 40rem);
  }
`;

export const Details = styled.div`
  padding: 2rem 2rem 0 2rem;
`;

export const PhotoContentImg = styled.img`
  grid-row: 1/4;
  @media (max-width: 64rem) {
    grid-row: 1;
  }
`;

export const AuthorContainer = styled.div`
  opacity: 0.5;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const Author = styled.p`


`


export const Views = styled.p`
    color: black;
    &::before{
        content: '';
        display: inline-block;
        width: 16px;
        height: 10px;
        margin-right: .5rem;
        background: url('../../assets/visualizacao-black.svg');
        /* background: url({View}) no-repeat center center;
         */

    }

`

export const AtributesUl = styled.ul`
    display: flex;
    font-size:1.125rem ;
    font-weight: bold;
    margin-top: 1rem;
    margin-bottom: 2rem;
    
`
export const AtributesLi = styled.li`
    margin-right: 2rem;
    list-style-type: none;
    &::before{
        content: "";
        display: inline-block;
        height: 20px;
        margin-right: 0.5rem;
        position: relative;
        top: 3px;
        width: 2px;
        background: #333;
        margin-top: 5px;



    }

    
`


export const Comments = styled.div`
  padding: 0 2rem;
`;
// -------------------------------SINGLE PAGE-----------------------------------


export const SinglePageContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem; /* Espaçamento entre elementos */
  justify-items: center; /* Centraliza os elementos horizontalmente */
  padding: 2rem; /* Espaçamento interno da seção */
`;

export const SinglePhotoContentImg = styled.img`
  width: 100%; /* A imagem ocupará a largura completa do contêiner */
  max-width: 100%;
  height: auto;
  border-radius: 0.4rem;
  overflow: hidden;
`;

export const SingleDetails = styled.div`
  padding: 2rem 0; /* Espaçamento interno superior e inferior */
  text-align: center; /* Centraliza o conteúdo de SingleDetails */
`;

export const SingleDescription = styled.p`
  margin-top: 1rem; /* Espaçamento superior */
  color: #555; /* Cor do texto */
`;