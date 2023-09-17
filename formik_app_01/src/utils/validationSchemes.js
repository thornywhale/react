import * as Yup from "yup";

const EMAIL_SCHEME = Yup.string().trim().email().required();
const PASSWORD_SCHEME = Yup.string()
  .trim()
  .matches(/{8, 20}/)
  .required();

export const LOG_IN_SCHEME = Yup.object({
  email: EMAIL_SCHEME,
  password: PASSWORD_SCHEME,
});

export const SIGN_UP_SCHEME = Yup.object({
  email: EMAIL_SCHEME,
  password: PASSWORD_SCHEME,
  role: Yup.string().oneOf(["buyer", "seller"]).required(),
});
