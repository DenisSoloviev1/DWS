import { ArrowLeft } from "../Icon";
import { useNavigate } from "react-router-dom";

import { isMobile } from "@/shared/lib";

import { GoBack } from "./style";

export const GoBackBtn = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(-1);

  return (
    <GoBack onClick={handleClick}>
      <ArrowLeft size={isMobile ? 22 : 45} />
    </GoBack>
  );
};
