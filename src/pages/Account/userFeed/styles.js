import styled from "styled-components";

export const FeedContainer = styled.ul`
  width: 70%;
  margin: 0 auto;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  align-content: center; /* Alinha o conteúdo ao centro verticalmente */
  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedPhoto = styled.li`
  list-style-type: none;
  position: relative; /* Adiciona position relative */

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    grid-column: span 2; /* Ocupa duas colunas */
    grid-row: span 2; /* Ocupa duas linhas */
  }
`;

export const Image = styled.img`
  
  border-radius: 0.2rem;
  display: grid;
  overflow: hidden;
  cursor: pointer;
  grid-area: 1/1;
  &:hover + span{
    display: flex;
    transition: 3s;
   

  }
`;

export const Visualizate = styled.span`
  position: relative;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1/1;
  display: none;
  &::before {
    width: 16px;
    height: 10px;
    content: '';
    display: inline-block;
    margin-right: .25rem;
    /* background: ; */
      /* display: flex; */
  }
`;
