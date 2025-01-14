import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FeeDetail: React.FC<{
  fee: { id: number; name: string; amount: number; dueDate: string };
}> = ({ fee }) => {
  const handleEditFee = () => {
    // Implement edit fee logic here
    alert(`Edit fee: ${fee.name}`);
  };

  const handleDeleteFee = () => {
    // Implement delete fee logic here
    alert(`Delete fee: ${fee.name}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Fee Detail</Typography>
      <Typography variant="body1">Name: {fee.name}</Typography>
      <Typography variant="body1">Amount: ${fee.amount}</Typography>
      <Typography variant="body1">Due Date: {fee.dueDate}</Typography>
      <Button variant="contained" color="primary" onClick={handleEditFee}>
        Edit Fee
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeleteFee}>
        Delete Fee
      </Button>
    </Box>
  );
};

export default FeeDetail;
