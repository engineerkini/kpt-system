import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const GradeTable: React.FC<{
  grades: {
    id: number;
    studentId: string;
    subject: string;
    score: number;
    date: string;
  }[];
}> = ({ grades }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {grades.map((grade) => (
            <TableRow key={grade.id}>
              <TableCell>{grade.studentId}</TableCell>
              <TableCell>{grade.subject}</TableCell>
              <TableCell>{grade.score}</TableCell>
              <TableCell>{grade.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GradeTable;
