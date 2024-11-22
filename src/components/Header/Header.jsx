import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import {
  StyledHeader,
  StyledHeaderContainer,
  StyledLogo,
  StyledLogoSpan,
  StyledNav,
  StyledNavLink,
} from "./Header.styled";

const Header = () => {
  return (
    <Suspense fallback={<Loader />}>
      <StyledHeader>
        <StyledHeaderContainer>
          <StyledLogo href="/">
            Travel<StyledLogoSpan>Trucks</StyledLogoSpan>
          </StyledLogo>
          <StyledNav>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
          </StyledNav>
        </StyledHeaderContainer>
      </StyledHeader>
      <Outlet />
    </Suspense>
  );
};

export default Header;
