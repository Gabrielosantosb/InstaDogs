import styled from "styled-components";

export const FeedContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: center;
  @media (max-width: 40rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FeedPhoto = styled.li`
  /* Estilos para o segundo elemento do tipo li dentro do FeedContainer */

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
    border-radius:0.2rem;
    display: grid;
    overflow: hidden;
    cursor: pointer;
    grid-area: 1/1;
    
`