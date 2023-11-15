import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppThemeContext } from "../../../themes/ThemeProvider";
import Topography from "../../../components/common/Topography";
import {
  Control,
  FieldValues,
  FieldErrors,
  UseFormHandleSubmit,
  useForm,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSignupForm } from "../../../constants/validationSchemas";

type StyledSignUpProps = { $theme: "light" | "dark" | undefined };
const StyledSignUp = styled.div<StyledSignUpProps>`
  position: absolute;
  top: 0px;
  width: 95vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.$theme === "light" ? "#ffffff9c" : "#121212b3"};
  & .signin {
    position: relative;
    padding: 10px;
    width: 400px;
    height: 500px;
    background: silver;
    background-color: #6161614a;
    border-radius: 7px;
    box-shadow: 2px 2px 2px 2px black;
  }
  & .closebutton {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    right: -10px;
    background-color: white;
    top: -5px;
    width: 40px;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    color: black;
  }
  & .closebutton:hover {
    border: 1px solid grey;
    box-shadow: 1px 1px 1px 1px grey;
    cursor: pointer;
  }
  }
`;
export type AdminSignupForm = {
  DOB: string;
  isAgreement: NonNullable<boolean | undefined>;
  password: string;
  confirmPassword: string;
  email: string;
  firstName: string;
  gender: string;
  attachment?: string | undefined;
  lastName: string;
  organisationId: string;
  userName: string;
  organisationName?: string;
};
const signupDefaultValues = {
  DOB: "",
  isAgreement: false,
  password: "",
  confirmPassword: "",
  email: "",
  firstName: "",
  gender: "",
  attachment: " dd",
  lastName: "",
  organisationId: "",
  userName: "",
};
export type ContextType = {
  setsignupAs: React.Dispatch<React.SetStateAction<string>>;
  control: Control<AdminSignupForm>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  errors: FieldErrors<AdminSignupForm>;
};
export default function Signup() {
  const { theme } = useContext(AppThemeContext);
  const navigate = useNavigate();
  const [signupAs, setsignupAs] = useState(" ");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adminSignupForm),
    defaultValues: signupDefaultValues,
  });
  return (
    <StyledSignUp $theme={theme}>
      <div className="signin">
        <span className="closebutton" onClick={() => navigate("/auth")}>
          X
        </span>
        <Topography
          varient="h2"
          color="black"
          textLineStyle="underline"
          textDecoration="double"
        >
          Sign Up{signupAs}
        </Topography>
        <Outlet
          context={
            { setsignupAs, control, errors, handleSubmit } satisfies ContextType
          }
        />
      </div>
    </StyledSignUp>
  );
}
