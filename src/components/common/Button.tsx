import React from 'react';
import { Button as MuiButton } from '@mui/material';

interface ButtonProps {
  onClick: () => void;
  label: string;
  color?: 'primary' | 'secondary' | 'default';
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color = 'primary' }) => {
  return (
    <MuiButton variant="contained" color={color} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;
