import * as yup from "yup";

export const signInSchema = yup.object({
  userName: yup.string().required("Enter a valid username"),
  password: yup.string().required("Enter a valid username"),
  isAdmin: yup.boolean().required("Are you an admin"),
});
export const changePasswordSchema = yup.object({
  newPassword: yup.string().required("Enter a valid password"),
  confirmPassword: yup
    .string()
    .required("Password not matched")
    .test("passwords-match", "Passwords must match", function (value) {
      return value === this.parent.newPassword;
    }),
});

export const adminSignupForm = yup.object({
  DOB: yup.string().required("Enter a valid password"),
  isAgreement: yup.boolean().required("Enter a valid password"),
  password: yup.string().required("Enter a valid password"),
  confirmPassword: yup
    .string()
    .required("Password not matched")
    .test("passwords-match", "Passwords must match", function (value) {
      return value === this.parent.password;
    }),
  email: yup.string().required("Enter a valid password"),
  firstName: yup.string().required("Enter a valid password"),
  gender: yup.string().required("Enter a valid password"),
  attachment: yup.string(),
  lastName: yup.string().required("Enter a valid password"),
  organisationId: yup.string().required("Enter a valid password"),

  userName: yup.string().required("Enter a valid password"),
});
