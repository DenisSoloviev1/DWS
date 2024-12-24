import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import styled from "styled-components";
import { Routing } from "@/pages";
import "./style.css";

const Progress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Progress />}>
        <Routing />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
