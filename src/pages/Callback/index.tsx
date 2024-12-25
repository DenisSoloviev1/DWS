import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { RolesDict, Roles } from "../../shared/types";
import { useAuthStore } from "@/entities/auth/model/store";
import { Routes } from "@/shared/constants";
import { baseUrl } from "@/shared/config";
import { CircularProgress } from "@mui/material";

const Callback: React.FC = () => {
  const { role, setRole, setUser } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [isRoleSaved, setIsRoleSaved] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const code = query.get("code");
    const state = query.get("state");

    if (code) {
      axios
        .post(`${baseUrl}/api/auth/`, { code, state })
        .then((response) => {
          const {
            access_token,
            user: { firstName, lastName, middleName, userID },
          } = response.data;

          const computedRole =
            userID < 0 ? RolesDict.STUDENT : RolesDict.EMPLOYEE;
          const user: string = `${lastName} ${firstName} ${middleName}`;

          if (Object.values(RolesDict).includes(computedRole)) {
            localStorage.setItem("authToken", access_token);
            setRole(computedRole as Roles);
            setIsRoleSaved(true);
            setUser(user);
          } else {
            console.error("Неверная роль, полученная с сервера:", computedRole);
          }
        })
        .catch((error) => {
          console.error("Ошибка при обмене кода на токен:", error);
        });
    } else {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    if (isRoleSaved) {
      navigate(Routes.MAIN);
    }
  }, [isRoleSaved, role, navigate]);

  if (loading) {
    return <CircularProgress />;
  }

  return null;
};

export default Callback;
