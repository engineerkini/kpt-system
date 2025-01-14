import React from "react";
import { TextField } from "@mui/material";

const Input: React.FC<{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}> = ({ label, value, onChange, type = "text" }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
      margin="normal"
    />
  );
};

export default Input;
