import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const AttendanceDetails: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Attendance Details</Typography>
      <TextField label="Student ID" fullWidth margin="normal" />
      <TextField
        label="Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField label="Status" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default AttendanceDetails;
