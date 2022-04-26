import { StylesConfig } from "react-select";
import Select from "react-select";
import { IOption } from "../../types";

const options: IOption[] = [
  { value: 0.1, label: "10%" },
  { value: 0.15, label: "15%" },
  { value: 0.2, label: "20%" },
];

interface ISelect {
  handleSelect: (option: IOption | null) => void;
  value: number;
}

const CustomSelect = ({ handleSelect, value }: ISelect) => {
  const selectStyles: StylesConfig<IOption> = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      borderRadius: "30px",
      padding: "16px",
      paddingLeft: "40px",
      border: "none",
      textAlign: "center",
    }),

    singleValue: (provided) => ({
      ...provided,
      color: "rgba(117, 108, 108, 0.6)",
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "26px",
      fontFamily: "Arial, Helvetica, sans-serif",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={selectStyles}
      value={options.find((item) => item.value === value)}
      defaultValue={options[0]}
      isMulti={false}
    />
  );
};

export { CustomSelect };
