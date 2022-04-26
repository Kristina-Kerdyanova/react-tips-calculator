import { ChangeEventHandler } from "react";
import { StyledInput } from "./styles";

interface IInput {
  name: string;
  value: string | number;
  placeholder: string;
  handleInput: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ name, value, handleInput }: IInput) => {
  return (
    <StyledInput
      name={name}
      value={value}
      placeholder={`Enter ${name}`}
      onChange={handleInput}
    />
  );
};

export { Input };
