import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthSvg, LogoDSTU } from "@/shared/ui/Icon";
import { handleLogin } from "@/entities/auth";
import Callback from "@/pages/Callback";
import { Flex } from "@/shared/ui";
import { Wrapper, Button, Helper, Image } from "@/pages/style";
import { Routes } from "@/shared/constants";
import { isMobile } from "@/shared/lib";

const Auth: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image>
        <AuthSvg />
      </Image>

      <Flex $width={isMobile ? "100%" : "50%"} $gap={20}>
        <p>Авторизируйтесь через edu.donstu.ru</p>

        <Callback />

        <Flex
          $gap={10}
          $direction={isMobile ? "column" : "row"}
          $align={"center"}
        >
          <Button onClick={handleLogin}>
            <LogoDSTU /> начать
          </Button>

          <Button onClick={() => navigate(Routes.WALCOMING)}>вернуться</Button>
        </Flex>

        <Helper>
          Hет личного кабинета?
          <div className="message">
            <span>Вам в 1-455a или&nbsp;</span>
            <a href="tel:88632738529">8 (863) 273-85-29</a>
          </div>
        </Helper>
      </Flex>
    </Wrapper>
  );
};

export default Auth;
