import { styled, TextField } from "@mui/material";

export const InputField = styled(TextField)`
  width: 100%;

  & .MuiInputBase-root {
    background-color: #f1f4f9;
    position: relative;
  }

  & .MuiInputBase-root {
    border-radius: 16px;
  }

  input {
    height: 20px;
  }
`;
