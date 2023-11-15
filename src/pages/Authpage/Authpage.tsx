import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { AppThemeContext } from "../../themes/ThemeProvider";

import Checkbox from "../../components/common/Checkbox";
import styled from "styled-components";
import Topography from "../../components/common/Topography";
import Buttons from "../../components/common/Buttons";

import { useQuery } from "@tanstack/react-query";

type StyledAuthHead = {
  $theme: "light" | "dark" | undefined;
};
const AuthBody = styled.div`
  box-shadow: 2px 2px 2px 2px grey;
  border-radius: 5px;
  padding: 30px;
  width: 95vw;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & img {
    border-radius: 35%;
    opacity: 0.7;
    width: 370px;
  }
`;
const AuthHead = styled.div<StyledAuthHead>`
  position: fixed;
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
  & div {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export default function Authpage() {
  const navigate = useNavigate();
  const { theme, changeTheme } = useContext(AppThemeContext);
  const signUphandleClick = () => {
    navigate("/auth/signup/select");
  };
  const signInhandleClick = () => {
    navigate("/auth/signin");
  };

  const { data } = useQuery({
    queryKey: ["test"],
    queryFn: () => Promise.resolve(5),
  });
  console.log(data);
  return (
    <div>
      <AuthHead $theme={theme}>
        <Topography varient="h2">CodeWise</Topography>
        <div>
          <Buttons
            title={"Signin"}
            width="medium"
            onClick={() => signInhandleClick()}
          />
          <Buttons
            title={"Signup"}
            width="medium"
            onClick={() => signUphandleClick()}
          />
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
        </div>
      </AuthHead>
      <AuthBody>
        <img src="/images/logo.png" alt="" />
        <Topography varient="subtitle2">Wating for user to signIn</Topography>
      </AuthBody>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
