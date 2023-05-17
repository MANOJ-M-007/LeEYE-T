import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
  InputLabel,
  Input,
} from "@mui/material";
// import { toast, Toaster } from "react-hot-toast";

// import ErrorAlert from "./ErrorAlert";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { useState } from "react";
import { axiosInstance } from "../ApiCalls/axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { userRegisterSchema } from "../Utility/validation";
const Register = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // console.log(name);
  // console.log(email);
  // console.log(mobile);
  // console.log(password);
  // console.log(confirmPassword);
  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    District: "",
    country: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: userRegisterSchema,
      onSubmit: (values) => {
        submitHandler();
        //   moblieVerify();
        console.log(values);
      },
    });
  //profile pic
  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };
  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfile(reader.result);
    };
  };

  const submitHandler = async () => {
    // if (!name || !email || !mobile || !password || !confirmPassword) {
    //   return;
    // } else {
    //   console.log(name, email, password);
    const Data = await axiosInstance.post(`/api/users/register`, {
      name: values.name,
      email: values.email,
      mobile: values.mobile,
      address: values.address,
      city: values.city,
      state: values.state,
      pin: values.pin,
      District: values.District,
      country: values.country,
      password: values.password,
      profile
    });
    console.log(Data);
    if (Data?.data?.token) {
      localStorage.setItem("userInfo", JSON.stringify(Data.data));
      navigate("/login");
    }
  };
  // };
  return (
    <>
      <Container component="main" maxWidth="sm">
        <CssBaseline />
        {/* <Toaster toastOptions={{ duration: 2000 }} /> */}
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  name="name"
                  value={values.name}
                  error={errors.name && touched.name ? true : false}
                  label={errors.name && touched.name ? errors.name : "Name"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  name="email"
                  value={values.email}
                  error={errors.email && touched.email ? true : false}
                  label={
                    errors.email && touched.email ? errors.email : "E mail"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  name="mobile"
                  value={values.mobile}
                  error={errors.mobile && touched.mobile ? true : false}
                  label={
                    errors.mobile && touched.mobile
                      ? errors.mobile
                      : "Mobile No"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="address"
                  name="address"
                  value={values.address}
                  error={errors.address && touched.address ? true : false}
                  label={
                    errors.address && touched.address
                      ? errors.address
                      : "address Name"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="city"
                  name="city"
                  value={values.city}
                  error={errors.city && touched.city ? true : false}
                  label={errors.city && touched.city ? errors.city : "city"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="state"
                  name="state"
                  value={values.state}
                  error={errors.state && touched.state ? true : false}
                  label={errors.state && touched.state ? errors.state : "state"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="pin"
                  name="pin"
                  value={values.pin}
                  error={errors.pin && touched.pin ? true : false}
                  label={errors.pin && touched.pin ? errors.pin : "pin No"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="District"
                  name="District"
                  value={values.District}
                  error={errors.District && touched.District ? true : false}
                  label={
                    errors.District && touched.District
                      ? errors.District
                      : "District"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  fullWidth
                  id="country"
                  name="country"
                  value={values.country}
                  error={errors.country && touched.country ? true : false}
                  label={
                    errors.country && touched.country
                      ? errors.country
                      : "country"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel sx={{ marginTop: "5px" }} htmlFor="upload-image">
                  Upload Profile
                </InputLabel>
                <Input
                  onChange={handleImage}
                  type="file"
                  id="upload-image"
                  name="uploadImage"
                  fullWidth
                  autoComplete="upload-image"
                  sx={{
                    height: "55px",
                    borderRadius: "4px",
                    border: "1px solid rgba(0, 0, 0, 0.23)",
                    "&:hover": {
                      border: "1px solid rgba(0, 0, 0, 0.5)",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  name="password"
                  value={values.password}
                  error={errors.password && touched.password ? true : false}
                  label={
                    errors.password && touched.password
                      ? errors.password
                      : "Password"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="confirmPassword"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  error={
                    errors.confirmPassword && touched.confirmPassword
                      ? true
                      : false
                  }
                  label={
                    errors.confirmPassword && touched.confirmPassword
                      ? errors.confirmPassword
                      : "Confirm Password"
                  }
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </>
  );
};

export default Register;
