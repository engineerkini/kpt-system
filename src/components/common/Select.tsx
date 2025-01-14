import React from "react";
import { TextField, MenuItem } from "@mui/material";

const Select: React.FC<{
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: { value: string; label: string }[];
}> = ({ label, value, onChange, options }) => {
  return (
    <TextField
      label={label}
      select
      value={value}
      onChange={onChange}
      fullWidth
      margin="normal"
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Select;
