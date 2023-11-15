import { useState } from "react";
import { Controller, Control, FieldValues } from "react-hook-form";
import styled from "styled-components";
type ControllerChange = (event: {
  target: { name: string; value: string };
}) => void;

type CheckboxProps = {
  helperText?: string;
  value?: string;
  name: string;
  type: "checkbox" | "switch";
  varient: "outlined" | "filled";
  onClick?: () => void;
  defaultValue: boolean;
  control?: unknown | Control;
  label: string;
};
type StyledCheckboxProps = {
  $varient: "outlined" | "filled";
  $checked: boolean;
  $type: "checkbox" | "switch";
  $helperText: string;
};
const StyledCheckbox = styled.span<StyledCheckboxProps>`
  display: inline-block;

  margin: 3px;
  & .checkbox {
    color: ${(props) => (props.$checked ? "#4495ed" : "inherit")};
    border-radius: 4px;
    border: ${(props) =>
      props.$checked
        ? "2px solid #4495ed"
        : props.$helperText
        ? "2px solid red"
        : "2px solid silver"};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 5px 8px 5px 8px;
  }
  & .switch {
    color: ${(props) => (props.$checked ? "#4495ed" : "black")};
    border: transparent;
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  & .switch input {
    opacity: 0;
  }

  & .slider {
    width: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & #round {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  & input:checked + .slider {
    background-color: #4495ed;
  }

  & #roundChecked {
    position: absolute;
    transform: translateX(29px);
    background-color: white;
    border-radius: 50%;
    height: 26px;
    width: 26px;
    transition: 0.4s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .slider {
    border-radius: 34px;
  }

  & #round {
    border-radius: 50%;
  }
  .error {
    font-size: 10px;
    color: red;
  }
`;
export default function Checkbox({
  helperText = "",
  value,
  label,
  name,
  control,
  defaultValue,
  type,
  varient,
  onClick,
}: CheckboxProps) {
  const [checked, setchecked] = useState(defaultValue);
  const onChangeFunction = (
    e: React.ChangeEvent<HTMLInputElement>,
    controlChange: ControllerChange | undefined
  ) => {
    console.log(control);
    control ? controlChange?.(e) : onClick?.();
    setchecked(!checked);
  };
  const render = (
    controlChange?: ControllerChange,
    fieldValues?: FieldValues["name"]
  ) => {
    return (
      <>
        {type === "checkbox" ? (
          <>
            <span className="checkbox">
              <input
                name={name}
                type="checkbox"
                checked={
                  control ? fieldValues || defaultValue : value || defaultValue
                }
                value={
                  control ? fieldValues || "" : value || defaultValue || ""
                }
                onChange={(e) => onChangeFunction(e, controlChange)}
              />
              <label htmlFor={name}>{label}</label>
            </span>
          </>
        ) : (
          <>
            <label className="switch">
              <input
                name={name}
                type="checkbox"
                checked={checked}
                onChange={(e) => onChangeFunction(e, controlChange)}
              />
              <span className="slider">
                <span id={!checked ? "round" : "roundChecked"}>
                  {!checked ? "Off" : "On"}
                </span>
              </span>
            </label>
          </>
        )}
      </>
    );
  };
  const controlvalue = (control: Control, name: string) =>
    control?._formValues[name];
  return (
    <StyledCheckbox
      $varient={varient}
      $checked={controlvalue(control as Control, name) || defaultValue}
      $type={type}
      $helperText={helperText}
    >
      {control ? (
        <Controller
          name={name}
          control={control as Control}
          defaultValue={defaultValue}
          render={({
            field: { onChange: controlChange, value: fieldValues },
          }) => render(controlChange, fieldValues)}
        />
      ) : (
        render()
      )}
    </StyledCheckbox>
  );
}
