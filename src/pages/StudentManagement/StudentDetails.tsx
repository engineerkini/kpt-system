import React from "react";
import { Box, Typography, Button } from "@mui/material";

const StudentDetails: React.FC<{
  student: {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    grade: string;
  };
}> = ({ student }) => {
  const handleEditStudent = () => {
    // Implement edit student logic here
    alert(`Edit student: ${student.firstName} ${student.lastName}`);
  };

  const handleDeleteStudent = () => {
    // Implement delete student logic here
    alert(`Delete student: ${student.firstName} ${student.lastName}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Student Details</Typography>
      <Typography variant="body1">First Name: {student.firstName}</Typography>
      <Typography variant="body1">Last Name: {student.lastName}</Typography>
      <Typography variant="body1">
        Date of Birth: {student.dateOfBirth}
      </Typography>
      <Typography variant="body1">Grade: {student.grade}</Typography>
      <Button variant="contained" color="primary" onClick={handleEditStudent}>
        Edit Student
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleDeleteStudent}
      >
        Delete Student
      </Button>
    </Box>
  );
};

export default StudentDetails;
