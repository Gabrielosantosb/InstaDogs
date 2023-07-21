
import styled from "styled-components";
// import { ReactComponent as Visualize } from "../../../assets/";
export const FeedContainer = styled.ul`
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  align-content: center; 
  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedPhoto = styled.li`
  list-style-type: none;
  position: relative; 

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    grid-column: span 3;
    grid-row: span 1; 
  }
`;


export const Visualizate = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.4rem;
  border-radius: 0.2rem;
  opacity: 0; 
  
  `;
  export const Image = styled.img`
    grid-area: 1/1;
    border-radius: 0.2rem;
    display: grid;
    overflow: hidden;
    cursor: pointer;
    grid-area: 1/1;
    &:hover + span{
      opacity: 1;
      
    }
  `;


// -------------------------------------PARTE MODAL-------------------------

export const FeedModalContainer = styled.section`
    display: flex;
    position: fixed;
    width: 100%;
    height: 90%;
    top: 0px;
    left: 0px;
    background: rgba(0,0,0,0.4);
    z-index: 1000;
    padding: 2rem calc(4rem + 15px) 2rem 4rem;
    @media (max-width:40rem) {
      padding: 2rem calc(2rem + 15px) 2rem 2rem;
      
    }

`