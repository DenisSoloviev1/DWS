import { IconUser } from "@/shared/ui/Icon";
import { memo, useEffect, useState } from "react";
import { NavBarContainer, PlainText } from "@/widjets/Navbar/style";
import { useAuthStore } from "@/entities/auth";
import { isMobile } from "@/shared/lib";
import { Badge, Flex, GoBackBtn } from "@/shared/ui";
import {
  Department,
  getDepartments,
} from "@/entities/departments";
import { IOptionStruct } from "@/shared/types";

export const NavBar = memo(() => {
  const role = useAuthStore((state) => state.role);
  const [departments, setDepartments] = useState<IOptionStruct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!role) return;

    setIsLoading(true);

    const fetchDepartments = async () => {
      try {
        const response = await getDepartments(role);
        setDepartments(response); 
      } catch (error) {
        console.error(error);
        setDepartments([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDepartments();
  }, [role]);

  useEffect(() => {
    console.log("Updated departments:", departments);
  }, [departments]);

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

        {isLoading ? (
          <PlainText style={{ margin: "20px" }}>Загрузка отделов...</PlainText>
        ) : (
          <nav style={{ width: "100%" }}>
            <ul>
              {departments.map((item: IOptionStruct) => (
                <Department key={item.id} id={item.id} name={item.name} />
              ))}
            </ul>
          </nav>
        )}
      </Flex>
    </NavBarContainer>
  );
});
