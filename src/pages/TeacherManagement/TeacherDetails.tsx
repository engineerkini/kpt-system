import React from "react";
import { Box, Typography, Button } from "@mui/material";

const TeacherDetails: React.FC<{
  teacher: {
    id: number;
    firstName: string;
    lastName: string;
    subject: string;
    hireDate: string;
  };
}> = ({ teacher }) => {
  const handleEditTeacher = () => {
    // Implement edit teacher logic here
    alert(`Edit teacher: ${teacher.firstName} ${teacher.lastName}`);
  };

  const handleDeleteTeacher = () => {
    // Implement delete teacher logic here
    alert(`Delete teacher: ${teacher.firstName} ${teacher.lastName}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Teacher Details</Typography>
      <Typography variant="body1">First Name: {teacher.firstName}</Typography>
      <Typography variant="body1">Last Name: {teacher.lastName}</Typography>
      <Typography variant="body1">Subject: {teacher.subject}</Typography>
      <Typography variant="body1">Hire Date: {teacher.hireDate}</Typography>
      <Button variant="contained" color="primary" onClick={handleEditTeacher}>
        Edit Teacher
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDeleteTeacher}
      >
        Delete Teacher
      </Button>
    </Box>
  );
};

export default TeacherDetails;
