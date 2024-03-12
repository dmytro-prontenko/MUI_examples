import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SideBar = styled.nav`
min-height:100vh;
display: flex;
flex-direction:column;
gap: 20px;
width: 200px;
padding: 40px;
border-right:2px solid black;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius:4px;
  text-decoration:none;
  color:black;

  &.active {
    text-decoration:underline;
  }

  &:hover:not(.active) {
    color: lightblue;
  }
`;

