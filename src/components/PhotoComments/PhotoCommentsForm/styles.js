import styled from "styled-components";


export const CommentSection = styled.ul`
  max-height: 200px; /* Adjust the maximum height as needed */
  overflow-y: auto;
  margin: 1rem 0;
  padding: 0;
  list-style: none;
`;

export const CommentItem = styled.li`
  margin-bottom: 8px;
  font-weight: bold;

  span {
    font-weight: normal;
  }
`;
export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  width: 30%;

  position: ${props => (props.single ? 'absolute' : 'absolute')};
  bottom: ${props => (props.single ? 'auto' : '20px')};
  /* margin-top: ${props => (props.single ? '10px' : '0')}; */

  textarea {
    display: block;
    width: 100%;
    border: none;
    font-size: 1rem;
    resize: none;
    border: 1px solid #eee;
    padding: 0.5rem;
    border-radius: 0.2rem;
    background: #eee;
    transition: 0.2s;
    &:hover {
      outline: none;
      border-color: #fb1;
      box-shadow: 0 0 0 3px #fea;
    }
    flex: 1;
    min-width: 0;
  }

  button {
    margin-left: 8px;
    background: transparent;
    color: #333;
    font-size: 1rem;
    border: none;
    padding: 0 1rem;
    overflow: hidden;
    cursor: pointer;
  }
  &:hover svg {
    fill: #fea;
    stroke: #fb1;
  }
`;