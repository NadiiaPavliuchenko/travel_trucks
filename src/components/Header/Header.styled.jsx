import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  background-color: var(--inputs);
  width: 100%;
  height: 72px;
`;

export const StyledHeaderContainer = styled.div`
  padding: 24px 64px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
`;

export const StyledLogo = styled.a`
  grid-column: 1;
  align-self: start;
  color: inherit;
  font-family: "Inter-Bold", sans-serif;
  font-weight: 700;
  font-size: 20px;
`;

export const StyledLogoSpan = styled.span`
  color: var(--text);
`;

export const StyledNav = styled.nav`
  grid-column: 2;
  justify-self: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Inter-Medium", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: inherit;

  &:not(:last-child) {
    margin-right: 32px;
  }
  transition: color 200ms ease-in-out;

  &:hover,
  :focus {
    color: var(--button-hover);
  }
  &:active {
    color: var(--button-hover);
  }
`;
