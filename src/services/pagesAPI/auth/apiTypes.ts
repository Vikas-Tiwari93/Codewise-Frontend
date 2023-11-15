export type LoginServiceRequestBody = {
  userName: string;
  password: string;
  isAdmin: boolean;
};
export type SignUpAdminServiceRequestBody = {
  firstName: string;
  email: string;
  lastName: string;
  password: string;
  organisationName: string;
  organisationId: string;
  attachment: string;
  isAgreement: Buffer;
  userName: string;
};
export type OtpServiceRequestBody = {
  email: string;
};
export type confirmOTPBody = {
  userName: string;
  otp: string;
};
export type ChangePasswordBody = {
  userName: string;
  password: string;
  isAdmin: boolean;
};
