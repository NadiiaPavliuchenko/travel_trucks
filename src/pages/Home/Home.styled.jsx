import styled from "styled-components";
import { BaseButton } from "../../styles/baseButton.styled";
import heroBg from "../../assets/hero_bg.png";

export const StyledHomePage = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 100vh;
  background-image: url(${heroBg});
  background-size: 100%;
  color: var(--inputs);
`;

export const StyledTitle = styled.h1`
  font-family: "Inter-Semibold" sans-serif;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 16px;
  line-height: 0.66667;
`;

export const StyledText = styled.p`
  font-family: "Inter-Semibold" sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.33333;
  margin-bottom: 40px;
`;

export const StyledButton = styled(BaseButton)`
  max-width: 173px;
`;
