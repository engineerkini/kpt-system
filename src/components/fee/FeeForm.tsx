import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const FeeForm: React.FC = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddFee = () => {
    // Implement add fee logic here
    alert(`Fee added: Name: ${name}, Amount: ${amount}, Due Date: ${dueDate}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Fee</Typography>
      <TextField
        label="Fee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Due Date"
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleAddFee}>
        Add Fee
      </Button>
    </Box>
  );
};

export default FeeForm;
