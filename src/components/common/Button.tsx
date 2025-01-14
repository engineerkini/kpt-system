import React from 'react';
import { Button as MuiButton } from '@mui/material';

const Button: React.FC<{ label: string; onClick: () => void; color?: 'primary' | 'secondary' }> = ({ label, onClick, color = 'primary' }) => {
  return (
    <MuiButton variant="contained" color={color} onClick={onClick}>
      {label}
    </MuiButton>
  );
};

export default Button;