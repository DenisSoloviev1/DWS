import { IconUser } from "@/shared/ui/Icon";
import { memo } from "react";
import { NavBarContainer, NavLink, PlainText } from "./style";
import { useAuthStore } from "@/entities/auth";
import { isMobile } from "@/shared/lib";
import { Badge, Flex, GoBackBtn } from "@/shared/ui";
import { menuItems, Menu } from "./constants";
import { RolesDict } from "@/shared/types";

export const NavBar = memo(() => {
  const role = useAuthStore((state) => state.role) as keyof typeof RolesDict;

  if (!role) {
    return (
      <NavBarContainer>
        <PlainText>Не удалось определить роль пользователя</PlainText>
      </NavBarContainer>
    );
  }

  return (
    <NavBarContainer>
      <Flex $direction={"row"} $align={"center"} $gap={20}>
        <GoBackBtn />
        <Badge
          not_style={true}
          isAuth={true}
          label={role}
          icon={<IconUser size={isMobile ? 25 : 45} />}
          direction="ltr"
        />
      </Flex>

      <Flex>
        <PlainText>Выберите отдел:</PlainText>

        <nav style={{ width: "100%" }}>
          <ul>
            {menuItems
              .filter(
                (link: Menu) =>
                  Array.isArray(link.allowedRoles) &&
                  link.allowedRoles.includes(role)
              )
              .map((link: Menu) => (
                <NavLink key={link.id} to={link.path}>
                  {link.label}
                </NavLink>
              ))}
          </ul>
        </nav>
      </Flex>
    </NavBarContainer>
  );
});
