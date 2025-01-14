import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const AddGrade: React.FC = () => {
  const [studentId, setStudentId] = useState("");
  const [subject, setSubject] = useState("");
  const [score, setScore] = useState("");
  const [date, setDate] = useState("");

  const handleAddGrade = () => {
    // Implement add grade logic here
    alert(
      `Grade added: Student ID: ${studentId}, Subject: ${subject}, Score: ${score}, Date: ${date}`
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Grade</Typography>
      <TextField
        label="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Score"
        type="number"
        value={score}
        onChange={(e) => setScore(e.target.value)}
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
      <Button variant="contained" color="primary" onClick={handleAddGrade}>
        Add Grade
      </Button>
    </Box>
  );
};

export default AddGrade;
