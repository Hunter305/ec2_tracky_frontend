import React from "react";
import Header from "../utils/header";
import { Container, Grid } from "@mui/material";

export default function Home(props) {
  return (
    <>
      <Header />
      <Container sx={{ mt: "25px" }}>
        <h1>Welcome to Tracky </h1>
        <p>track your work</p>
        <Container sx={{ mt: "40px" }}>
          <h3>go to dashboard and start using, how to use</h3>
          <ul style={{ marginTop: "18px" }}>
            <li>login using your mailID</li>
            <li>go to dashboard</li>
            <li>click on new document</li>
            <li>click on created document name and start doing your work</li>
            <li>clcik on top left arrow to and do the commit</li>
          </ul>
        </Container>
      </Container>
    </>
  );
}
