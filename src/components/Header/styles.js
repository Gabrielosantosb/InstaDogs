import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  justify-content: space-between;
  margin-top: 2rem;
  `;

export const ButtonContainer = styled.div`
  /* margin-top: 15%;
  margin-left: 2rem; */
`;

export const ButtonNav = styled(NavLink)`
  text-decoration: none;
  padding: 8px 16px;
  background-color: #eaeaea;
  border-radius: 4px;
  color: #333;
  margin: 0 8px;
  &:hover {
    background-color: gray;
    transition: 0.4s;
  }
`;
