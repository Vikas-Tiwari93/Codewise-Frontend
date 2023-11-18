import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppThemeContext } from "../../../themes/ThemeProvider";

import styled from "styled-components";
import Topography from "../../../components/common/Topography";
import Input from "../../../components/common/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordSchema } from "../../../constants/validationSchemas";
import { useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { IoArrowBack } from "react-icons/io5";
import Buttons from "../../../components/common/Buttons";
import { useMutation } from "@tanstack/react-query";
import {
  changePasswordService,
  confirmOTPservice,
  sendOtpService,
} from "../../../services/pagesAPI/auth/apiService";
import { toast } from "react-toastify";
import { useMutationWhitToast } from "../../../hooks/reactQuery";
import { AxiosError } from "axios";
type ForgotPasswordProps = { $theme: "light" | "dark" | undefined };
const ForgotPassword = styled.div<ForgotPasswordProps>`
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
  & .goback {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 7px;
    border-radius: 7px;
  }
  & .goback:hover {
    background: grey;
    cursor: pointer;
  }
  & .goback:active {
    opacity: 0.7;
  }
  & .mainForm {
    display: flex;
    gap:10px;
    flex-direction: column;
    justify-content: center;
    align-items: centre;
    border: 1px solid grey;
    height: 85%;
    padding: 10px;
  }
  & .field,.newpassword {
    display: flex;
    justify-content: space-between;
  }
  & .spinner,.chagePassword{
    padding:10px;
    display: flex;
    justify-content: center;
  }
  & .instructions {
    padding:10px;
    display:flex;
    flex-direction:column;
    gap:10px;
    border-top: 1px solid grey;
    margin-top: 10px;
  }
  }`;

export default function ForgetPassword() {
  const { theme } = useContext(AppThemeContext);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [userName, setUserName] = useState("");
  const [isAdmin, setisAdmin] = useState(false);

  const navigate = useNavigate();
  const sendEmailMutation = useMutation({
    mutationFn: sendOtpService,
    onSuccess: (data) => {
      JSON.parse(data.data).result
        ? toast.success(JSON.parse(data.data).message)
        : toast.error(JSON.parse(data.data).message);
      setUserName(JSON.parse(data.data).result.resultSet.userName);
    },
    onError: () => {
      toast.error("Error occured wile sending email");
    },
  });

  const validateOtpMutation = useMutation({
    mutationFn: confirmOTPservice,
    onSuccess: (data) => {
      console.log("success");
      JSON.parse(data.data).result.isAdmin
        ? setisAdmin(true)
        : setisAdmin(false);
    },
    onError: (error: AxiosError) => {
      toast.error(JSON.parse(error.response?.data as string).message);
    },
  });
  const passowrdChangemutation = useMutationWhitToast(changePasswordService, {
    onSuccess: () => {
      navigate("/auth/signin");
    },
  });
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });
  const emailSend = (email: string) => {
    sendEmailMutation.mutate({ email });
  };
  const verifyOTP = (otp: string) => {
    validateOtpMutation.mutate({ userName, otp });
  };

  return (
    <ForgotPassword $theme={theme}>
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
          Forget Password
        </Topography>
        <div
          className="goback"
          onClick={() => {
            navigate("/auth/signin");
          }}
        >
          <IoArrowBack size={19} />
          <Topography varient="h3">Go back</Topography>
        </div>
        <div className="mainForm">
          {!validateOtpMutation.isSuccess ? (
            <div>
              <div className="field">
                <Topography varient="subtitle2">Enter email</Topography>
                <Input
                  disabled={validateOtpMutation.isSuccess}
                  varient="standard"
                  value={email}
                  label="Email"
                  name="email"
                  type="message"
                  onMessageSend={emailSend}
                  onChange={setEmail}
                />
              </div>
              <div className="field">
                <Topography varient="subtitle2">Enter OTP :</Topography>
                <Input
                  disabled={validateOtpMutation.isSuccess}
                  varient="standard"
                  value={otp}
                  label="OTP"
                  name="otp"
                  type="message"
                  onChange={setOtp}
                  onMessageSend={verifyOTP}
                />
              </div>
            </div>
          ) : null}
          {validateOtpMutation.isSuccess ? (
            <div>
              <div className="newpassword">
                <Topography varient="subtitle2">New password :</Topography>
                <Input
                  type="password"
                  label="New password"
                  name="newPassword"
                  control={control}
                  resetControl={() => reset()}
                  helperText={errors.newPassword?.message}
                />
              </div>
              <div className="newpassword">
                <Topography varient="subtitle2">Confirm password :</Topography>
                <Input
                  label="Confirm password"
                  name="confirmPassword"
                  control={control}
                  resetControl={() => reset()}
                  helperText={errors.confirmPassword?.message}
                />
              </div>
              <div className="chagePassword">
                <Buttons
                  title={"Change password"}
                  width="small"
                  isLoading={passowrdChangemutation.isPending}
                  onClick={handleSubmit((data) => {
                    passowrdChangemutation.mutate({
                      userName,
                      isAdmin,
                      password: data?.newPassword,
                    });
                  })}
                />
              </div>
            </div>
          ) : (
            <div className="spinner">
              {(sendEmailMutation.isPending ||
                validateOtpMutation.isPending) && (
                <MoonLoader color={theme === "dark" ? "white" : "blue"} />
              )}
            </div>
          )}

          <div className="instructions">
            <Topography className="problem" varient="h3">
              Enter the email id as given during Signup to generate OTP.
            </Topography>
            <Topography varient="h3" className="problem">
              Enter OPT as sent you on your Email id to reset password
            </Topography>
          </div>
        </div>
      </div>
    </ForgotPassword>
  );
}
