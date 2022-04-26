import { StyledButton } from "./styles";

interface IButton {
  isDisabled: boolean;
}

const Button = ({ isDisabled }: IButton) => {
  return (
    <StyledButton disabled={isDisabled} type="submit">
      Ohhhoooo 🍻
    </StyledButton>
  );
};

export { Button };
