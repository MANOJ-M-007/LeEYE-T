import * as Yup from "yup";

export const userRegisterSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().min(10).required("Please enter your mobile"),
  address: Yup.string().min(2).max(25).required("Please enter your address name"),
  city: Yup.string().min(2).max(25).required("Please enter your city"),
  state: Yup.string().min(2).max(25).required("Please enter your state"),
  pin: Yup.string().min(6).required("Please enter your pin"),
  District: Yup.string().min(2).max(25).required("Please enter your District"),
  country: Yup.string().min(2).max(25).required("Please enter your country"),
  password: Yup.string().min(5).required("Please enter your password"),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null], "Password must match"),
});