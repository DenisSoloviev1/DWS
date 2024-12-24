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
      {isMain && (
        <>
          <Aside>
            <NavBar />
          </Aside>

          <Flex $justify={"center"} $align={"end"} $height={"100vh"}>
            <MainSvg />
          </Flex>
        </>
      )}
      {!isMain && (
        <>
          <Aside>
            <NavBar />
          </Aside>

          <Box>{children}</Box>
        </>
      )}
    </Flex>
  );
};

export default Main;
