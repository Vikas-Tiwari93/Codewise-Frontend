import styled from "styled-components";

import Topography from "../../../components/common/Topography";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppThemeContext } from "../../../themes/ThemeProvider";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../../components/common/Input";
import { useForm } from "react-hook-form";
import Checkbox from "../../../components/common/Checkbox";
import Buttons from "../../../components/common/Buttons";
import { signInSchema } from "../../../constants/validationSchemas";
import { useMutation } from "@tanstack/react-query";
import { loginService } from "../../../services/pagesAPI/auth/apiService";
import { setTokenkeys } from "../../../services/axios.baseservices/tokenMethods";
import { toast } from "react-toastify";
type StyledSignInProps = { $theme: "light" | "dark" | undefined };
const StyledSignIn = styled.section<StyledSignInProps>`
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
  & .mainForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 1px solid grey;
    height: 90%;
    padding: 10px;
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
  & .username {
    display: flex;
    justify-content: space-around;
  }
  & .checkbox {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  & .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
  & .issues {
    height: 50px;
    border-top: 1px solid grey;
    margin: 4px;
  }
  .problem:hover {
    cursor: pointer;
  }
`;
export default function Signin() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      JSON.parse(data?.data)?.authToken
        ? setTokenkeys(
            JSON.parse(data.data).refreshToken,
            JSON.parse(data.data).authToken
          )
        : null;
      JSON.parse(data?.data)?.authToken
        ? toast.success(JSON.parse(data.data).message)
        : toast.error(JSON.parse(data.data).message);
      JSON.parse(data?.data)?.authToken ? navigate("/homepage") : null;
    },
  });
  const { theme } = useContext(AppThemeContext);
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
    defaultValues: {
      userName: "",
      password: "",
      isAdmin: false,
    },
  });
  const submitdata = handleSubmit(async (data) => {
    const { userName, password, isAdmin } = data;
    mutation.mutate({ userName, password, isAdmin });
  });
  const defaultValues = {
    userName: "",
    password: "",
    isAdmin: false,
  };

  return (
    <StyledSignIn $theme={theme}>
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
          Sign In
        </Topography>
        <div className="mainForm">
          <div className="username">
            <Topography varient="subtitle2">Username :</Topography>
            <Input
              label="Username"
              name="userName"
              control={control}
              resetControl={() => reset()}
              defaultValue={defaultValues.userName || "fghn"}
              helperText={errors.userName?.message}
            />
          </div>
          <div className="username">
            <Topography varient="subtitle2">Password :</Topography>
            <Input
              label="Password"
              name="password"
              type="password"
              control={control}
              defaultValue={defaultValues.password || "fghn"}
              helperText={errors.password?.message}
            />
          </div>
          <div className="checkbox">
            <Topography varient="subtitle3">Are u an Admin ?</Topography>
            <Checkbox
              control={control}
              name="isAdmin"
              type="checkbox"
              varient="outlined"
              label="Signin as Admin"
              defaultValue={defaultValues.isAdmin}
              helperText={errors.isAdmin?.message}
            />
          </div>
          <div className="buttons">
            <Buttons
              title={"Sign in"}
              width="small"
              onClick={submitdata}
              isLoading={mutation.isPending}
              disabled={mutation.isPending}
            />
            <Buttons
              title={"Clear all fields"}
              width="small"
              onClick={() => reset(defaultValues)}
            />
          </div>
          <div className="issues">
            <Topography
              className="problem"
              varient="h3"
              textLineStyle="underline"
              onClick={() => navigate("/auth/forgetpassword")}
            >
              Forgot Password
            </Topography>
            <Topography
              varient="h3"
              textLineStyle="underline"
              className="problem"
            >
              having a problem? contact us.
            </Topography>
          </div>
        </div>
      </div>
    </StyledSignIn>
  );
}
