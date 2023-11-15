import { MoonLoader } from "react-spinners";
import styled from "styled-components";
type VariantType = "text" | "outlined" | "contained";
type Width = "small" | "medium" | "large";
type FirstButtonProps = {
  width: Width;
  $varient: VariantType;
  disabled: boolean;
};
const widthStyle: Record<
  Width,
  {
    fontSize: string;
    fontWeight: string;
    padding: string;
    borderRadius: string;
  }
> = {
  small: {
    fontSize: "13px",
    fontWeight: "600",
    padding: "7px 12px 7px 12px",
    borderRadius: "3px",
  },
  medium: {
    fontSize: "16px",
    fontWeight: "600",
    padding: "7px 12px 7px 12px ",
    borderRadius: "4px",
  },
  large: {
    fontSize: "18px",
    fontWeight: "600",
    padding: "7px 12px 7px 12px",
    borderRadius: "4px",
  },
};
const variantStyles: Record<
  VariantType,
  { backgroundColor: string; color: string; border: string }
> = {
  text: {
    backgroundColor: "silver",
    color: "#4495ed",
    border: "transparent",
  },
  outlined: {
    backgroundColor: "transparent",
    color: "#4495ed",
    border: "2px solid #4495ed",
  },
  contained: {
    backgroundColor: "#4495ed",
    color: "white",
    border: "transparent",
  },
};

const TextButton = styled.button<FirstButtonProps>`
  letter-spacing: 1.5px;
  border-radius: ${(props) => widthStyle[props.width].borderRadius};
  padding: ${(props) => widthStyle[props.width].padding};
  font-size: ${(props) => widthStyle[props.width].fontSize};
  background-color: ${(props) => variantStyles[props.$varient].backgroundColor};
  border: ${(props) => variantStyles[props.$varient].border};
  font-weight: ${(props) => widthStyle[props.width].fontWeight};

  color: ${(props) => variantStyles[props.$varient].color};

  &:hover {
    cursor: ${(props) => (props.disabled ? "" : "pointer")};
    opacity: ${(props) => (props.disabled ? "1" : "0.7")};
  }
  &:active {
    opacity: 1;
  }
  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
type ButtonProps = {
  children?: React.ReactNode;
  title: React.ReactNode;
  width: Width;
  isLoading?: boolean;
  disabled?: boolean;
  varient?: "text" | "outlined" | "contained";
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Buttons({
  children,
  title,
  width,
  isLoading = false,
  disabled = false,
  varient = "contained",
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <span style={{ display: "inline-block" }}>
      {
        <TextButton
          width={width}
          $varient={varient}
          disabled={disabled}
          onClick={() => onClick()}
          {...rest}
        >
          <div>
            {title}
            {isLoading && <MoonLoader size={"14px"} color="white" />}
            {children && children}
          </div>
        </TextButton>
      }
    </span>
  );
}
