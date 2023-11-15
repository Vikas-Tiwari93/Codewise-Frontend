import { postRequest } from "../../axios.baseservices/AxiosInstance";
import {
  ChangePasswordBody,
  LoginServiceRequestBody,
  OtpServiceRequestBody,
  SignUpAdminServiceRequestBody,
  confirmOTPBody,
} from "./apiTypes";

export const loginService = async ({
  userName,
  password,
  isAdmin,
}: LoginServiceRequestBody) => {
  const LOGIN_END_POINT = `/auth/signin`;
  const reqBody = { userName, password, isAdmin };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    isAuth: false,
    isJson: true,
  });
};

export const SignUpasAdminService = ({
  email,
  firstName,
  lastName,
  password,
  organisationName,
  organisationId,
  attachment,
  isAgreement,
  userName,
}: SignUpAdminServiceRequestBody) => {
  const LOGIN_END_POINT = "/auth/signup/admin";

  const reqBody = {
    email,
    firstName,
    lastName,
    password,
    organisationName,
    organisationId,
    attachment,
    isAgreement,
    userName,
  };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    isAuth: false,
    isJson: true,
  });
};

export const SignUpAsStudentService = ({
  email,
  firstName,
  lastName,
  password,
  organisationName,
  organisationId,
  attachment,
  isAgreement,
  userName,
}: SignUpAdminServiceRequestBody) => {
  const LOGIN_END_POINT = "/auth//signup/student";
  const loginUrl = new URL(LOGIN_END_POINT);
  const reqBody = {
    email,
    firstName,
    lastName,
    password,
    organisationName,
    organisationId,
    attachment,
    isAgreement,
    userName,
  };
  return postRequest(loginUrl.toString(), reqBody, { isAuth: false });
};
export const sendOtpService = ({ email }: OtpServiceRequestBody) => {
  const LOGIN_END_POINT = "/auth/password/emailotp";

  const reqBody = { email };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    isAuth: false,
    isJson: true,
  });
};
export const confirmOTPservice = ({ userName, otp }: confirmOTPBody) => {
  const LOGIN_END_POINT = "/auth/password/otpvalidate";

  const reqBody = { userName, otp };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    isAuth: false,
    isJson: true,
  });
};
export const changePasswordService = ({
  userName,
  password,
  isAdmin,
}: ChangePasswordBody) => {
  const LOGIN_END_POINT = "/auth/password/changepassword";
  const reqBody = { userName, password, isAdmin };
  return postRequest(LOGIN_END_POINT, JSON.stringify(reqBody), {
    isAuth: false,
    isJson: true,
  });
};
