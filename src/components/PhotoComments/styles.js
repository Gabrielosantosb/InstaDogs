import styled from "styled-components";

export const CommentsContainer = styled.div`

ul {
    overflow-y: auto;
    list-style: none;
    word-break: break-word;
    padding: .2rem;
  }

  li {
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.2;

    span {
      font-weight: normal;
    }
  }
`;

