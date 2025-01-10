import React, { Suspense } from "react";
import { CircularProgress } from "@mui/material";
import { DateProvider, QueryProvider, RouterProvider } from "./providers";
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
    // <DateProvider>
      <QueryProvider>
        <RouterProvider>
          <Suspense fallback={<Progress />}>
            <Routing />
          </Suspense>
        </RouterProvider>
      </QueryProvider>
    // </DateProvider>
  );
};

export default App;
