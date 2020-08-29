import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { FlexRow, FlexGrow } from "styles/css";
import { Sidebar } from "components/Sidebar";
import { Dashboard, Statistics, Map, Settings } from "screens";

export default function App() {
  return (
    <Container>
      <Sidebar />
      <Router>
        <Dashboard path="/" />
        <Statistics path="/statistics" />
        <Map path="/map" />
        <Settings path="/settings" />
      </Router>
    </Container>
  );
}

const Container = styled.div`
  ${FlexRow}
  ${FlexGrow}

  height: 100vh;
`;
