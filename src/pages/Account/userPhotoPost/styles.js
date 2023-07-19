import styled from "styled-components";

export const PhotoPostContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export const Preview = styled.div`
  border-radius: 1rem;
  background-size: cover;
  background-position: center center;

  &::after {
    content: "";
    display: block;
    height: 0;
    padding-bottom: 100%;
  }
`;

export const PhotoPostImg = styled.img`
    margin-bottom: 1rem;
`

