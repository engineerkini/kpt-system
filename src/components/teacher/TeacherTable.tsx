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

const TeacherTable: React.FC<{
  teachers: {
    id: number;
    firstName: string;
    lastName: string;
    subject: string;
    hireDate: string;
  }[];
}> = ({ teachers }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Hire Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell>{teacher.firstName}</TableCell>
              <TableCell>{teacher.lastName}</TableCell>
              <TableCell>{teacher.subject}</TableCell>
              <TableCell>{teacher.hireDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TeacherTable;
