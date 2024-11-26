import styled from "styled-components";

export const BaseButton = styled.button`
  border-radius: 200px;
  border: none;

  padding: 16px 50px;
  height: 56px;

  color: inherit;
  font-family: "Inter-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.01em;

  background-color: var(--button);
  transition: background-color 200ms ease-in-out;

  &:hover,
  :focus {
    background-color: var(--button-hover);
  }
  &:active {
    background-color: var(--button-hover);
  }
`;

export const BaseBadge = styled.div`
  display: inline-flex;
  gap: 8px;

  border-radius: 100px;
  border: none;
  padding: 12px 18px;
  height: 48px;

  font-family: "Inter-Medium", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  text-align: center;

  color: var(--main);
  background-color: var(--badges);
  fill: var(--main);
`;
