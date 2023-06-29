import styled from "styled-components";
import { ReactComponent as User } from "../../assets/usuario.svg";

import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
  box-shadow: 0px, 1px 1px rgba(0,0,0,);
`;


export const ButtonContainer = styled.div`
  /* margin-top: 15%;
  margin-left: 2rem; */
`;

export const ButtonNav = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 12px 18px;
  border-radius: 4px;
  color: #333;
  margin: 0 8px;
`;

export const HomeIcon = styled(User)`
  margin-left: 4px;
  margin-bottom: 5px;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0,0,0, 0.1);
`;
