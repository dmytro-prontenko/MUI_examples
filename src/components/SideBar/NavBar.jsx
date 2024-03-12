import { SideBar, StyledLink } from "./SideBar.styled";

const NavBar = () => {
  return (
    <SideBar>
      <StyledLink to="/typography">Typography</StyledLink>
      <StyledLink to="/buttons">Buttons</StyledLink>
      <StyledLink to="/text-field">TextField</StyledLink>
      <StyledLink to="/select">Select</StyledLink>
    </SideBar>
  );
}

export default NavBar


