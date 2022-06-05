import React from "react";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./AppBar";
import "./App.css";
import ProfileAvatar from "./ProfileAvatar";
import Summary from "./Summary";
import { Grid } from "@mui/material";
function App() {
  return (
    <Container maxWidth="lg">
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <ProfileAvatar></ProfileAvatar>
        </Grid>
        <Grid item xs={6} md={8}>
          <Summary />
        </Grid>
        <Grid item xs={6} md={4}>
          <h4>Certificates</h4>
        </Grid>
        <Grid item xs={6} md={8}>
          <h4>Awards</h4>
          Start Award
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
