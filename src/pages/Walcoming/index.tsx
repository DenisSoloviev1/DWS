import React from "react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/entities/auth";
import { Routes } from "@/shared/constants";
import { isMobile } from "@/shared/lib";
import { Roles, RolesDict } from "@/shared/types";
import { Badge, Flex } from "@/shared/ui";
import { Image, Wrapper } from "../style";
import { ArrowRight } from "@/shared/ui/Icon";

const Auth: React.FC = () => {
  const { setRole, resetAuth } = useAuthStore();
  const navigate = useNavigate();

  const handleClick = (roleLabel: string) => {
    resetAuth();
    const roleValue = Object.entries(RolesDict).find(
      ([, value]) => value === roleLabel
    )?.[1];

    if (roleValue) {
      if (roleLabel === "Соискатель") {
        setRole(roleValue as Roles);
        navigate(Routes.MAIN);
      } else {
        navigate(Routes.AUTH);
      }
    } else {
      console.error("Неизвестная роль:", roleLabel);
    }
  };

  return (
    <Wrapper>
      <Flex $direction={"column"} $align={"start"}>
        <a
          href="/public/Инструкция.pdf"
          target="_blanck"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            color: "#11519c",
          }}
        >
          Как пользоваться системой?
        </a>

        <h1>Принятие обращений ДГТУ</h1>
        <h4>Кто вы?</h4>

        <Flex $width={"70%"} $direction={"column"}>
          <Badge
            onClick={() => handleClick("Работник")}
            label="работник"
            icon={<ArrowRight size={isMobile ? 33 : 66} />}
            direction="rtl"
          />
          <Badge
            onClick={() => handleClick("Студент")}
            label="студент"
            icon={<ArrowRight size={isMobile ? 33 : 66} />}
            direction="rtl"
          />
          <Badge
            onClick={() => handleClick("Соискатель")}
            label="гость"//название заменено, потому что нужно переделывать бэк под эту роль
            icon={<ArrowRight size={isMobile ? 33 : 66} />}
            direction="rtl"
          />
        </Flex>
      </Flex>
      
      <Image>
        <img src="/logo2.png" alt="logo" />
      </Image>
    </Wrapper>
  );
};

export default Auth;
