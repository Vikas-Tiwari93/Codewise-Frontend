import styled from "styled-components";
import { useState } from "react";
import { MdArrowForward, MdClose } from "react-icons/md";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Controller, Control, FieldValues } from "react-hook-form";
type InputTypes =
  | "text"
  | "email"
  | "password"
  | "phone"
  | "search"
  | "message";
type VarientTypes = "filled" | "outlined" | "standard";
type InputElmProps = {
  onMessageSend?: (message: string) => void;
  value?: string;
  resetControl?: () => void;
  onChange?: (value: string) => void;
  onReset?: () => void;
  defaultValue?: string;
  fullwidth?: boolean;
  control?: unknown;
  label: string;
  name: string;
  type?: InputTypes;
  varient?: VarientTypes;
  helperText?: string;
  disabled?: boolean;
};
type Controlchange = (event: {
  target: { name: string; value: string | number };
}) => void;
type StyledInputElmProps = {
  $isOnFocus: boolean;
  $varient: VarientTypes;
  fullwidth?: boolean;
  $helperText: string;
};

const OnBlurStyles: Record<
  VarientTypes,
  {
    backgroundColor: string;
    color: string;
    border: string;
    borderBottom: string;
    borderRadius: string;
  }
> = {
  filled: {
    backgroundColor: "silver",
    color: "grey",
    border: "transparent",
    borderBottom: "",
    borderRadius: "4px",
  },
  outlined: {
    backgroundColor: "transparent",
    color: "grey",
    border: " 2px solid grey",
    borderBottom: "",
    borderRadius: "4px",
  },
  standard: {
    backgroundColor: "transparent",
    color: "grey",
    border: "transparent",
    borderBottom: "2px solid grey",
    borderRadius: "0px",
  },
};
const OnFocusStyles: Record<
  VarientTypes,
  {
    backgroundColor: string;
    color: string;
    border: string;
    borderBottom: string;
  }
> = {
  filled: {
    backgroundColor: "silver",
    color: "#4495ed",
    border: "transparent",
    borderBottom: "2px solid #4495ed",
  },
  outlined: {
    backgroundColor: "transparent",
    color: "#4495ed",
    border: " 2px solid #4495ed",
    borderBottom: "",
  },
  standard: {
    backgroundColor: "transparent",
    color: "#4495ed",
    border: "transparent",
    borderBottom: "2px solid #4495ed",
  },
};
const InputElm = styled.fieldset<StyledInputElmProps>`
  padding: 4px 6px 4px 6px;
  border-radius: ${(props) => OnBlurStyles[props.$varient].borderRadius};
  height: 50px;
  font-size: 25px;
  display: ${(props) => (props.fullwidth ? "block" : "inline-block")};
  border: ${(props) =>
    props.$isOnFocus
      ? OnFocusStyles[props.$varient].border
      : OnBlurStyles[props.$varient].border};
  border-bottom: ${(props) =>
    props.$isOnFocus
      ? OnFocusStyles[props.$varient].borderBottom
      : OnBlurStyles[props.$varient].borderBottom};
  background-color: ${(props) =>
    props.$isOnFocus
      ? OnFocusStyles[props.$varient].backgroundColor
      : OnBlurStyles[props.$varient].backgroundColor};
  color: ${(props) =>
    props.$isOnFocus
      ? OnFocusStyles[props.$varient].color
      : OnBlurStyles[props.$varient].color};
  & input {
    display: inline-block;
    border: none;
    width: 100%;
    height: 27px;
    background:transparent
  }
  & input::placeholder {
    back
  }
  & legend {
    font-size: ${(props) =>
      props.$helperText && !props.$isOnFocus ? "10px" : "13px"} ;
    font-weight: 700;
    color: ${(props) =>
      props.$isOnFocus ? "inherit" : props.$helperText ? "red" : "transparent"};
  }
  & input:focus {
    outline: none;
  }
  & .renderInput {
    height: 15px;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .error {
    font-size: 10px;
    color: red;
  }
`;
export default function Input({
  resetControl,
  onMessageSend,
  value,
  onChange,
  onReset,
  defaultValue,
  disabled = false,
  helperText = "",
  type = "text",
  fullwidth,
  control,
  label,
  name,
  varient = "outlined",
}: InputElmProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);

  const handleChangeInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    controlChange?: Controlchange
  ) => {
    control && type !== "message"
      ? controlChange?.(e)
      : onChange?.(e.target.value);
  };
  const renderControlElement = (
    controlChange?: Controlchange,
    fieldValues?: FieldValues["value"]
  ) => (
    <>
      <legend className="renderInput">
        {isOnFocus ? label : ""}
        {helperText && !isOnFocus && helperText}
      </legend>
      <div className="renderInput">
        {type === "text" ||
        type === "email" ||
        type === "search" ||
        type === "message" ? (
          <>
            <input
              id={label}
              type={type}
              disabled={disabled}
              name={name}
              defaultValue={defaultValue || ""}
              onFocus={() => setIsOnFocus(true)}
              onBlur={() => setIsOnFocus(false)}
              value={control ? fieldValues : value || defaultValue || ""}
              placeholder={!isOnFocus ? label : ""}
              onChange={(e) => handleChangeInput(e, controlChange)}
            />
            {type === "search" && <MdClose />}

            {type === "message" && (
              <MdArrowForward
                onClick={
                  onMessageSend && value ? () => onMessageSend(value) : null
                }
              />
            )}
            {type === "text" && (
              <MdClose
                onClick={resetControl ? () => resetControl() : onReset}
              />
            )}
          </>
        ) : (
          <>
            {type === "password" && (
              <>
                <input
                  type={showPassword ? "text" : type}
                  disabled={disabled}
                  name={name}
                  value={
                    control
                      ? fieldValues || defaultValue
                      : value || defaultValue
                  }
                  onFocus={() => setIsOnFocus(true)}
                  onBlur={() => setIsOnFocus(false)}
                  placeholder={!isOnFocus ? label : ""}
                  onChange={(e) => handleChangeInput(e, controlChange)}
                />
                {showPassword ? (
                  <IoIosEyeOff
                    color={"#4495ed"}
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                ) : (
                  <IoIosEye
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                )}
              </>
            )}
            {type === "phone" && <></>}
          </>
        )}
      </div>
    </>
  );
  return (
    <InputElm
      $isOnFocus={isOnFocus}
      $varient={varient}
      fullwidth={fullwidth}
      $helperText={helperText}
    >
      {control ? (
        <Controller
          name={name as string}
          control={control as Control}
          render={({
            field: { onChange: controlChange, value: fieldValues },
          }) => renderControlElement(controlChange, fieldValues)}
        />
      ) : (
        renderControlElement()
      )}
    </InputElm>
  );
}
