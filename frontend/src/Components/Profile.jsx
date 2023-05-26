import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
  InputLabel,
  Input,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDetailsAction, profileEditAction } from "../Actions/userAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Profile = () => {
  //for show details
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userDetails);
  //   /// for add address dailog box

    const { profileEditSuccess } = useSelector((state) => state.profileEdit);
  //edit profile

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [addressName, setAddressName] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pin, setPin] = useState();
  const [District, setDistrict] = useState();
  const [country, setCountry] = useState();
  const [profile, setProfile] = useState([]);
  console.log(profile);
  //edit profile
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

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

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    const Data = {
      name,
      email,
      mobile,
      password,
      addressName,
      city,
      state,
      pin,
      District,
      country,
      if (profile) {
        Data.profile = profile;
      }
    };
    
    dispatch(profileEditAction(Data));
    handleClose();
  };

  useEffect(() => {
    dispatch(userDetailsAction());
  }, [dispatch,profileEditSuccess]);

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
      <Card
        sx={{
          height: "100%",
          backgroundColor: "#ffffff",
          boxShadow: "4px 4px 10px rgb(86, 74, 74)",
          alignItems: "center",
        }}
      >
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>ADD ADDRESS HERE</DialogTitle>
          <form onSubmit={handleSubmit}>
            <DialogContent>
              <TextField
                name="name"
                label="Name"
                defaultValue={userDetails?.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                name="name"
                label="Email"
                defaultValue={userDetails?.email}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                name="name"
                label="Mobile"
                defaultValue={userDetails?.mobile}
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                fullWidth
                margin="normal"
              />
              <TextField
                name="name"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Grid container spacing={1}>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="City"
                    defaultValue={userDetails?.city}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="Home"
                    defaultValue={userDetails?.address}
                    value={addressName}
                    onChange={(e) => setAddressName(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="Pin"
                    defaultValue={userDetails?.pin}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="State"
                    defaultValue={userDetails?.state}
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="District"
                    defaultValue={userDetails?.District}
                    value={District}
                    onChange={(e) => setDistrict(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    name="name"
                    label="Country"
                    defaultValue={userDetails?.country}
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    fullWidth
                    margin="normal"
                  />
                </Grid>
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
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="warning">
                Cancel
              </Button>
              <Button type="submit" color="success">
                Submit
              </Button>
            </DialogActions>
          </form>
        </Dialog>

        {/* <Grid item xs={12} > */}
        {/* <Card
            sx={{
              height: "100%",
              backgroundColor: "#ffffff",
              display:'flex',
              alignItems:'center'
            }}
          > */}
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "100%" },
                mb: { xs: 2, md: 2 },
                paddingLeft: { xs: "0px", sm: "50px", md: "75px", lg: "100px" },
              }}
            >
              <AccountCircleIcon
                sx={{ color: "#AA77FF", marginBottom: "10px" }}
              />
              <CardHeader
                sx={{}}
                avatar={
                  <Avatar
                    variant="square"
                    src={userDetails?.profile?.url}
                    sx={{
                      boxShadow: "4px 4px 5px rgba(190, 133, 255,.5)",
                      width: {
                        xs: "200px",
                        sm: "250px",
                        md: "300px",
                        lg: "350px",
                      },
                      height: {
                        xs: "200px",
                        sm: "250px",
                        md: "300px",
                        lg: "350px",
                      },
                    }}
                  />
                }
              />
            </Box>
            <Box
              sx={{
                minWidth: "280px",
                paddingRight: { lg: "300px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
                variant="h6"
                color="textSecondary"
                component="p"
              >
                NAME : {userDetails?.name}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                EMAIL : {userDetails?.email}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                MOBILE NO : {userDetails?.mobile}
              </Typography>
              <Typography
                variant="h6"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                HOME : {userDetails?.address}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                CITY : {userDetails?.city}
              </Typography>

              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                PIN : {userDetails?.pin}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                District : {userDetails?.District}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                STATE : {userDetails?.state}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                sx={{
                  fontFamily: "sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 550,
                  color: "#757575",
                  marginBottom: "0.5rem",
                  lineHeight: "1.5",
                }}
              >
                COUNTRY : {userDetails?.country}
              </Typography>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  sx={{
                    color: "#000000",
                    marginTop: "35px",
                    backgroundColor: "#C2FFC2",
                    boxShadow: "5px 5px 15px rgba(191, 215, 234,1)",
                    width: "100px",
                    marginRight: "2.5px",
                  }}
                  onClick={handleOpen}
                >
                  EDIT
                </Button>
              </div>
            </Box>
          </Box>
        </CardContent>
        {/* </Card> */}
        {/* </Grid> */}
      </Card>
    </Box>
  );
};

export default Profile;
