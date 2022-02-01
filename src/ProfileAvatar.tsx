import Box from "@mui/material/Box";
import profile from "./gaurav.png"; // relative path to image
import Paper from "@mui/material/Paper";
import React from "react";

function ProfileAvatar() {
  return (
    <Box sx={{ bgcolor: "#e2d6f3", height: "100vh" }}>
      <Paper elevation={3} sx={{ width: 230, height: 260 }}>
        {" "}
        <img src={profile} alt="Profile"></img>
        Gaurav Thorat <br />
        Senior Frontend Engineer
      </Paper>
    </Box>
  );
}
export default ProfileAvatar;
