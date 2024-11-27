import styled from "styled-components";

export const BadgesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const BadgeIcon = styled.svg`
  stroke: currentColor;
  fill: currentColor;
`;

export const BadgeText = styled.p`
  text-transform: capitalize;
`;
