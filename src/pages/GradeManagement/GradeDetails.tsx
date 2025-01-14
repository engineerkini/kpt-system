import React from "react";
import { Box, Typography, Button } from "@mui/material";

const GradeDetail: React.FC<{
  grade: {
    id: number;
    studentId: string;
    subject: string;
    score: number;
    date: string;
  };
}> = ({ grade }) => {
  const handleEditGrade = () => {
    // Implement edit grade logic here
    alert(`Edit grade: ${grade.subject}`);
  };

  const handleDeleteGrade = () => {
    // Implement delete grade logic here
    alert(`Delete grade: ${grade.subject}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Grade Detail</Typography>
      <Typography variant="body1">Student ID: {grade.studentId}</Typography>
      <Typography variant="body1">Subject: {grade.subject}</Typography>
      <Typography variant="body1">Score: {grade.score}</Typography>
      <Typography variant="body1">Date: {grade.date}</Typography>
      <Button variant="contained" color="primary" onClick={handleEditGrade}>
        Edit Grade
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeleteGrade}>
        Delete Grade
      </Button>
    </Box>
  );
};

export default GradeDetail;
