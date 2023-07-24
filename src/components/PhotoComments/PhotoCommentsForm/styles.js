import styled from "styled-components";

export const FormContainer = styled.form`
  /* position: fixed; */
  bottom: 20px;
  left: 50%;
  /* transform: translateX(-50%); */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */

  textarea {
    width: 300px;
    padding: 8px;
    border: 1px solid #ccc;
    resize: vertical;
  }

  button {
    margin-left: 8px;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
  }
`;