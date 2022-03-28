import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  font-family: ${(props) => props.theme.fonts.body};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 8px 16px;
  color: ${(props) => props.theme.colors.text};
  border: 0;
  border-radius: 0.2rem;
  font-size: ${(props) => props.theme.fontSizes.m};
  cursor: pointer;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover,
  &:active {
    background-color: ${(props) => props.theme.colors.accent};
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px white, 0 0 0 4px salmon;
  }
`;

export const LargeButton = styled(Button)`
  font-size: ${(props) => props.theme.fontSizes.l};
`;

export default Button;
