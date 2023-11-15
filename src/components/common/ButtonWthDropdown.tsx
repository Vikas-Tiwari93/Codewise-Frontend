import { useMemo, useState } from "react";
import Buttons from "./Buttons";
import { MdKeyboardArrowDown } from "react-icons/md";
import styled from "styled-components";
type ButtonDropdownProps = {
  title: string;
  dropDownList: { title: string; onClick?: () => void }[];
  size: "small" | "medium" | "large";
  varient: "text" | "outlined" | "contained";
  showSelected?: boolean;
};
type Dropdownprops = {
  size: "small" | "medium" | "large";
  $showSelected: boolean;
};
const DropDown = styled.ul<Dropdownprops>`
  list-style: none;
  position: absolute;
  width: 100%;
  font-size: ${(props) => (props.size === "small" ? "13px" : "inherit")};
  color: #4495ed;
  border-radius: 5px;
  & li {
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: ${(props) =>
      props.$showSelected ? "space-between" : "center"};
    cursor: pointer;
    padding: 3px 5px 3px 5px;
  }
  & li button {
    width: ${(props) => (props.size === "small" ? "5px" : "10px")};
    height: ${(props) => (props.size === "small" ? "5px" : "10px")};
    border-radius: 50%;
    border: none;
    background-color: #4495ed;
  }
  & li:hover {
    opacity: 0.7;
  }
`;
export default function ButtonDropdown({
  title,
  size = "medium",
  varient = "text",
  dropDownList,
  showSelected = false,
}: ButtonDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>();
  const rotateIcon = useMemo(
    () => (isDropdownOpen ? { transform: "rotate(-90deg)" } : {}),
    [isDropdownOpen]
  );
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px",
        width: "initial",
      }}
    >
      <Buttons
        children={
          <span>
            <MdKeyboardArrowDown style={rotateIcon} />
          </span>
        }
        title={title}
        width={size}
        varient={varient}
        onClick={() => {
          setIsDropdownOpen(!isDropdownOpen);
        }}
      ></Buttons>
      <div style={{ width: "100%", position: "relative" }}>
        {isDropdownOpen && (
          <DropDown size={size} $showSelected={showSelected}>
            {dropDownList.map((elm, index) => (
              <li
                key={elm.title}
                onClick={() => {
                  elm.onClick && elm.onClick();
                  setIsDropdownOpen(!isDropdownOpen);
                  setSelectedIndex(index);
                }}
              >
                {elm.title}{" "}
                {showSelected && selectedIndex === index ? (
                  <button></button>
                ) : null}
              </li>
            ))}
          </DropDown>
        )}
      </div>
    </span>
  );
}
