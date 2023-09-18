import * as Yup from "yup";

const EMAIL_SCHEME = Yup.string()
  .trim()
  .email("⚠️ Use a valid email.")
  .matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, "⚠️ Use a valid email.")
  .required("⚠️ Required field!");
const PASSWORD_SCHEME = Yup.string()
  .trim()
  .matches(
    /^(?=.*?[a-z])(?=.*?[0-9]).{8,64}$/,
    "⚠️ Password must have at least one lowercase letter, one number, length - from 8 to 64."
  )
  .required("⚠️ Required field!");
const NAME_SCHEME = Yup.string()
  .trim()
  .matches(
    /[A-Z][a-z]{2,20}/,
    "⚠️ Name must include only letters, the first one must be uppercase, length - from 2 to 20."
  )
  .required("⚠️ Required field!");
const USERNAME_SCHEME = Yup.string()
  .trim()
  .matches(
    /[a-zA-Z0-9]{4,20}/,
    "⚠️ Username must include at least one letter and one number, length - from 4 to 20."
  )
  .required("⚠️ Required field!");

export const LOG_IN_SCHEME = Yup.object({
  email: EMAIL_SCHEME,
  password: PASSWORD_SCHEME,
});

export const SIGN_UP_SCHEME = Yup.object({
  email: EMAIL_SCHEME,
  password: PASSWORD_SCHEME,
  passwordConf: Yup.string()
    .trim()
    .required("⚠️ Required field!")
    .oneOf([Yup.ref("password")], "⚠️ Passwords must match!"),
  firstName: NAME_SCHEME,
  lastName: NAME_SCHEME,
  displayName: USERNAME_SCHEME,
  role: Yup.string()
    .oneOf(["buyer", "seller"])
    .required("⚠️ Choose who You are!"),
});
