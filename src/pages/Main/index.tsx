import { ReactNode } from "react";
import { Wrapper } from "../style";
import { Flex, MainSvg } from "@/shared/ui";

import { Aside, Box } from "../style";
import { Routes } from "@/shared/constants";

import { NavBar } from "@/widjets/navbar";
import { isMobile } from "@/shared/lib";

const Main = ({ children }: { children: ReactNode }) => {
  const isMain = window.location.pathname === Routes.MAIN;

  return (
    <Flex $direction={isMobile ? "column" : "row"}>
      <Aside>
        <NavBar />
      </Aside>

      {isMain ? <MainSvg /> : <Box></Box>}
    </Flex>
  );
};

export default Main;
