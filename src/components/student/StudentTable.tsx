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

const StudentTable: React.FC<{
  students: {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    grade: string;
  }[];
}> = ({ students }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.firstName}</TableCell>
              <TableCell>{student.lastName}</TableCell>
              <TableCell>{student.dateOfBirth}</TableCell>
              <TableCell>{student.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentTable;
