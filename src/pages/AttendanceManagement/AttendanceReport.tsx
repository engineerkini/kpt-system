import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const AttendanceReport: React.FC = () => {
  const handleGenerateReport = () => {
    // Implement report generation logic here
    alert("Report generated!");
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Attendance Report</Typography>
      <TextField
        label="Start Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        type="date"
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateReport}
      >
        Generate Report
      </Button>
    </Box>
  );
};

export default AttendanceReport;
