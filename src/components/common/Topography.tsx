import React from "react";
import styled from "styled-components";
type Varients =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle1"
  | "subtitle2"
  | "subtitle3"
  | "base";
type TextStyle = "bold" | "italic" | "normal";
type TextDecoration = "underline" | "line-through";
const textDecorationLine: {
  [S in TextDecoration]: { dashed: "dashed"; wavy: "wavy"; double: "double" };
} = {
  underline: {
    dashed: "dashed",
    wavy: "wavy",
    double: "double",
  },
  "line-through": {
    dashed: "dashed",
    double: "double",
    wavy: "wavy",
  },
};
const varientStyle = {
  subtitle1: {
    marginX: "8px",
    marginY: "6px",
    fontSize: "17px",
    padding: "5px",
  },
  subtitle2: {
    marginX: "4px",
    marginY: "3px",
    fontSize: "15px",
    padding: "3px",
  },
  subtitle3: {
    marginX: "4px",
    marginY: "3px",
    fontSize: "13px",
    padding: "2px",
  },
  base: {
    marginX: "0px",
    marginY: "0px",
    fontSize: "12px",
    padding: "0px",
  },
};
type TopographyProps = {
  textColor?: string;
  className?: string;
  children: React.ReactNode;
  textEllipses?: boolean;
  align?: "left" | "right" | "center";
  capitalise?: boolean;
  varient?: Varients;
  textStyle?: TextStyle;
  textDecoration?: "dashed" | "double" | "wavy";
  textLineStyle?: TextDecoration;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

type StyledTopographyProps = {
  $textColor?: string;
  className?: string;
  $textDecoration?: "dashed" | "double" | "wavy";
  $textStyle?: TextStyle;
  $textEllipses?: boolean;
  $capitalise?: boolean;
  $align?: "left" | "right" | "center";
  $varient?: "subtitle1" | "subtitle2" | "subtitle3" | "base";
  $textLineStyle?: TextDecoration;
} & React.HtmlHTMLAttributes<HTMLDivElement>;
const StyledTopography = styled.div<StyledTopographyProps>`
  line-height: ${(props) => (props.$textLineStyle ? "30px" : "normal")};
  text-transform: ${(props) => (props.$capitalise ? "capitalise" : "none")};
  text-align: ${(props) => props.$align};
  overflow: hidden;
  color: ${(props) => (props.$textColor ? props.$textColor : "inherit")};
  white-space: ${(props) => (props.$textEllipses ? "nowrap" : "wrap")};
  text-overflow: ${(props) => (props.$textEllipses ? "ellipses" : "initial")};
  padding: ${(props) =>
    props.$varient ? varientStyle[props.$varient].padding : "2px"};
  margin-top: ${(props) =>
    props.$varient ? varientStyle[props.$varient].marginY : "0px"};
  margin-bottom: ${(props) =>
    props.$varient ? varientStyle[props.$varient].marginY : "0px"};
  margin-left: ${(props) =>
    props.$varient ? varientStyle[props.$varient].marginX : "0px"};
  margin-right: ${(props) =>
    props.$varient ? varientStyle[props.$varient].marginX : "0px"};
  font-size: ${(props) =>
    props.$varient ? varientStyle[props.$varient].fontSize : "13px"};
  font-style: ${(props) => props.$textStyle};
  text-decoration-line: ${(props) =>
    props.$textLineStyle ? props.$textLineStyle : "unset"};
  text-decoration-style: ${(props) =>
    props.$textDecoration && props.$textLineStyle
      ? textDecorationLine[props.$textLineStyle][props.$textDecoration]
      : "none"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Topography({
  textColor,
  textDecoration,
  textLineStyle,
  textStyle = "normal",
  varient = "base",
  capitalise = false,
  textEllipses = false,
  align = "left",
  className,
  children,
  ...rest
}: TopographyProps) {
  const render = (varient: Varients, children: React.ReactNode) => {
    if (varient === "h1") {
      return <h1>{children}</h1>;
    }
    if (varient === "h2") {
      return <h2>{children}</h2>;
    }
    if (varient === "h3") {
      return <h3>{children}</h3>;
    }
    if (varient === "h4") {
      return <h4>{children}</h4>;
    }
    return children;
  };
  const varientProps = (varient: Varients) => {
    if (
      varient === "subtitle1" ||
      varient === "subtitle2" ||
      varient === "subtitle3" ||
      varient === "base"
    ) {
      return varient;
    } else {
      return "base";
    }
  };
  return (
    <StyledTopography
      className={className}
      {...rest}
      $textDecoration={textDecoration}
      $textStyle={textStyle}
      $textEllipses={textEllipses}
      $capitalise={capitalise}
      $align={align}
      $varient={varientProps(varient)}
      $textColor={textColor}
      $textLineStyle={textLineStyle}
    >
      {render(varient, children)}
    </StyledTopography>
  );
}
