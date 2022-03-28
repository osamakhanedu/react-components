import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  background-color: salmon;
  padding: 8px 16px;
  color: snow;
  border: 0;
  border-radius: 0.2rem;
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 100%;
  }

  &:hover,
  &:active {
    background-color: crimson;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 2px white, 0 0 0 4px salmon;
  }
`;

export const LargeButton = styled(Button)`
  font-size: 2rem;
`;

export default Button;
