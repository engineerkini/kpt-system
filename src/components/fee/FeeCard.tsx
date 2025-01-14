import React from "react";
import { Box, Typography, Paper } from "@mui/material";

const FeeCard: React.FC<{
  fee: { id: number; name: string; amount: number; dueDate: string };
}> = ({ fee }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px", margin: "16px" }}>
      <Typography variant="h6">{fee.name}</Typography>
      <Typography variant="body1">Amount: ${fee.amount}</Typography>
      <Typography variant="body1">Due Date: {fee.dueDate}</Typography>
    </Paper>
  );
};

export default FeeCard;
