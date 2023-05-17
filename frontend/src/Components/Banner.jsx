import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import img from "../assets/banner.png";

const Banner = () => {
  return (
    <Box
      position="relative"
      sx={{
        width: "100%",
        height: "35vh",
        borderRadius: ".5rem",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(50%)",
          borderRadius: ".5rem",
        }}
      />
      WELCOME TO TASK MANAGER
      <Box
        sx={{
          position: "absolute",
          bottom: "0",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: "1",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              marginBottom: "5px",
              margin: "10px",
              fontFamily: "monospace",
              marginRight: "20px",
            }}
          >
            PROFILE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
