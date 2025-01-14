import React, { useState } from "react";
import { Box, Typography, TextField, Button, MenuItem } from "@mui/material";

const AttendanceForm: React.FC = () => {
  const [studentId, setStudentId] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");

  const handleAddAttendance = () => {
    // Implement add attendance logic here
    alert(
      `Attendance added: Student ID: ${studentId}, Date: ${date}, Status: ${status}`
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Attendance</Typography>
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
        select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        fullWidth
        margin="normal"
      >
        <MenuItem value="Present">Present</MenuItem>
        <MenuItem value="Absent">Absent</MenuItem>
      </TextField>
      <Button variant="contained" color="primary" onClick={handleAddAttendance}>
        Add Attendance
      </Button>
    </Box>
  );
};

export default AttendanceForm;
