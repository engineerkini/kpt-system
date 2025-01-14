import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const MarkAttendance: React.FC = () => {
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleMarkAttendance = () => {
    // Implement attendance marking logic here
    alert(`Attendance marked for ${studentId} on ${date} as ${status}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Mark Attendance</Typography>
      <TextField
        label="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        select
        fullWidth
        margin="normal"
      >
        <MenuItem value="Present">Present</MenuItem>
        <MenuItem value="Absent">Absent</MenuItem>
        <MenuItem value="Late">Late</MenuItem>
      </TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleMarkAttendance}
      >
        Mark Attendance
      </Button>
    </Box>
  );
};

export default MarkAttendance;
