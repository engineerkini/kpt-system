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

const AttendanceTable: React.FC<{
  attendances: {
    id: number;
    studentId: string;
    date: string;
    status: string;
  }[];
}> = ({ attendances }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Student ID</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {attendances.map((attendance) => (
            <TableRow key={attendance.id}>
              <TableCell>{attendance.studentId}</TableCell>
              <TableCell>{attendance.date}</TableCell>
              <TableCell>{attendance.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AttendanceTable;
