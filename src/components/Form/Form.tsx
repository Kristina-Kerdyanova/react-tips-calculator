import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { IOption } from "../../types";
import { Button } from "../Button/Button";

import { StyledForm, Title, Subtitle, Container, Total } from "./styles";
import { ICalculation } from "../../types";

const Form = () => {
  const [number, setNumber] = useState<ICalculation>({
    bill: "",
    persons: "",
    tip: 0.1,
    total: 0,
  });

  const { bill, persons, tip, total } = number;

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setNumber({
      ...number,
      [name]: +value,
    });
  };

  const handleSelect = (value: IOption | null) => {
    if (value) {
      setNumber({
        ...number,
        tip: value.value,
      });
    }
  };

  const handleForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const total = (+bill * +tip) / +persons;
    if (bill && persons) {
      setNumber({
        ...number,
        total: total,
      });
    }
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (bill > 0 && persons > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleForm}>
      <Title>Welcome to App</Title>
      <Subtitle>Let's go calculate your tips</Subtitle>
      <Container>
        <Input
          name="bill"
          value={bill}
          placeholder={`Enter bill`}
          handleInput={handleInput}
        />
        <Input
          name="persons"
          value={persons}
          placeholder={`Enter persons`}
          handleInput={handleInput}
        />
        <CustomSelect handleSelect={handleSelect} value={tip} />
      </Container>

      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

export default Form;
