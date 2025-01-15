import React from "react";
import { Flex, MainSvg } from "@/shared/ui";
import { Aside, Box, Image } from "../style";
import { NavBar } from "@/widjets/Navbar";
import { isMobile } from "@/shared/lib";
import { Form, useFormStore } from "@/widjets/Form";

const Main: React.FC = () => {
  const { showForm } = useFormStore();
  return (
    <Flex $direction={isMobile ? "column" : "row"}>
      <Aside>
        <NavBar />
      </Aside>

      {showForm ? (
        <Box $show={showForm}>
          <Form />
        </Box>
      ) : (
        <Image>
          <MainSvg />
        </Image>
      )}
    </Flex>
  );
};

export default Main;
