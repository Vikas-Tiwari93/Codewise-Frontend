import { Control, Controller, FieldValues } from "react-hook-form";
import styled from "styled-components";
type Size = "small" | "medium" | "large";
type Type = "select" | "radio";
type Options = {
  name: string;
  value: string;
};
type SelectInputProps = {
  unControlledValue?: string;
  onUncontrolledChange?: (elm: string) => void;
  type: Type;
  name: string;
  control?: Control;
  size?: Size;
  disabled?: boolean;
  radioNumbers?: number;
  options: Options[];
  helperText?: string;
};
type StyledInput = {
  $size: Size;
  $type: Type;
  $helperText?: string;
};
type Controlchange = (event: {
  target: { name: string; value: string | number };
}) => void;
const StyledInput = styled.div<StyledInput>`
  width: 100%;
  & .container {
    display: flex;
    gap: 10px;
    padding: 5px;
    width: 100%;
    border: ${(props) =>
      props.$type === "select"
        ? "transparent"
        : props.$helperText
        ? "2px solid red"
        : "2px solid grey"};
    border-radius: 4px;
  }
  & input {
    width: 17px;
    height: 27px;
  }
  & select {
    width: 100%;
    height: 100%;
    display: inline-block;
    max-width: 220px;
    overflow: scroll;
    border: none;
    background: transparent;
    outline: none;
  }
  & option {
    width: 100%;
  }
  & label {
    display: flex;
    align-items: center;
  }
`;

export default function SelecterInputs({
  onUncontrolledChange,
  type,
  name,
  control,
  size = "medium",
  options = [],
  disabled = false,
  helperText,
}: SelectInputProps) {
  const renderCOmponent = (
    onChange?: Controlchange,
    value?: FieldValues["value"]
  ) => {
    return (
      <>
        {type === "select" ? (
          <select
            disabled={disabled}
            onChange={
              control
                ? onChange
                : (e) => {
                    onUncontrolledChange?.(e.target.value);
                  }
            }
          >
            {options.map((elm) => {
              return <option value={elm.value}>{elm.name}</option>;
            })}
          </select>
        ) : (
          <>
            {options.map((elm) => {
              return (
                <>
                  <label htmlFor={name}>{elm.name}</label>
                  <input
                    name={name}
                    type="radio"
                    value={elm.value}
                    checked={elm.value === value}
                    onChange={
                      control
                        ? onChange
                        : () => {
                            onUncontrolledChange?.(elm.value);
                          }
                    }
                  />
                </>
              );
            })}
          </>
        )}
      </>
    );
  };
  return (
    <StyledInput $size={size} $type={type} $helperText={helperText}>
      <div className="container">
        {control ? (
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) =>
              renderCOmponent(onChange, value)
            }
          />
        ) : (
          renderCOmponent()
        )}
      </div>
    </StyledInput>
  );
}
