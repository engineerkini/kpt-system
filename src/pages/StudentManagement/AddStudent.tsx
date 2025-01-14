import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const AddStudent: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [grade, setGrade] = useState("");

  const handleAddStudent = () => {
    // Implement add student logic here
    alert(
      `Student added: ${firstName} ${lastName}, DOB: ${dateOfBirth}, Grade: ${grade}`
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Student</Typography>
      <TextField
        label="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date of Birth"
        type="date"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddStudent}>
        Add Student
      </Button>
    </Box>
  );
};

export default AddStudent;
