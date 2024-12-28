import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Image } from "../style.ts";
import { Flex } from "@/shared/ui";
import { NotFoundSvg } from "@/shared/ui/Icon";
import { Routes } from "@/shared/constants";

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Image>
        <NotFoundSvg />
      </Image>

      <Flex $width={"auto"} $direction="column" $align="start" $gap={10}>
        <h2>
          Ошибка 404:
          <br /> <span>страница не найдена.</span>
        </h2>

        <p>
          Вернуться на <NavLink to={Routes.WALCOMING}>главную</NavLink>.
        </p>
      </Flex>
    </Wrapper>
  );
};

export default NotFound;
