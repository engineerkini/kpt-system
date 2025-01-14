import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const AddTeacher: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [hireDate, setHireDate] = useState('');

  const handleAddTeacher = () => {
    // Implement add teacher logic here
    alert(`Teacher added: ${firstName} ${lastName}, Subject: ${subject}, Hire Date: ${hireDate}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Teacher</Typography>
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
        label="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Hire Date"
        type="date"
        value={hireDate}
        onChange={(e) => setHireDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTeacher}>
        Add Teacher
      </Button>
    </Box>
  );
};

export default AddTeacher;