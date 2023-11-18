import { useContext } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AppThemeContext } from "../../themes/ThemeProvider";
import Topography from "../../components/common/Topography";

import Checkbox from "../../components/common/Checkbox";
import ImageWithDropdown from "../../components/common/ImageWithDropdown";

type StyledAuthHead = {
  $theme: "light" | "dark" | undefined;
};
type StyledAuthBody = {
  $theme: "light" | "dark" | undefined;
};

const AuthBody = styled.div<StyledAuthBody>`
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 5px;
  border: ${(props) =>
    props.$theme === "light" ? "1px solid grey" : "1px solid grey"};
  padding: 10px;
  width: 95vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthHead = styled.div<StyledAuthHead>`
  position: sticky;
  top: 0px;
  backdrop-filter: blur(12px);
  padding: 4px 14px;
  width: 95vw;
  border-radius: 4px;
  border: ${(props) =>
    props.$theme === "light" ? "1px solid grey" : "1px solid grey"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 2px 2px 2px 2px silver;
  & .rightHeader {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;
export default function Homepage() {
  const { theme, changeTheme } = useContext(AppThemeContext);
  const options = [
    { name: "vikas", render: () => "wtf are u doing" },
    { name: "vikas", render: () => "wtf are u doing" },
    { name: "vikas", render: () => "wtf are u doing" },
  ];
  return (
    <>
      <AuthHead $theme={theme}>
        <Topography varient="h2">CodeWise</Topography>
        <div className="rightHeader">
          <Topography varient="subtitle2">Dark Theme</Topography>
          <span>
            <Checkbox
              defaultValue={false}
              label="myinput"
              name="myinput"
              type="switch"
              varient="outlined"
              onClick={() => {
                changeTheme && theme ? changeTheme(theme) : undefined;
              }}
            />
          </span>
          <ImageWithDropdown optionsArray={options} />
        </div>
      </AuthHead>
      <AuthBody $theme={theme}>
        <Outlet />
      </AuthBody>
    </>
  );
}
