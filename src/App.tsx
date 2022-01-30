import React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./AppBar";
import profile from "./gaurav.png"; // relative path to image
import Paper from "@mui/material/Paper";

function App() {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Box sx={{ bgcolor: "#e2d6f3", height: "100vh" }}>
        <Paper elevation={3} sx={{ width: 230, height: 260 }}>
          {" "}
          <img src={profile} alt="Profile"></img>
          Gaurav Thorat <br />
          Senior Frontend Engineer
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
