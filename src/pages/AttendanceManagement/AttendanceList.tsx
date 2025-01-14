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

const AttendanceList: React.FC = () => {
  const attendances = [
    { id: 1, studentId: "S001", date: "2023-01-01", status: "Present" },
    { id: 2, studentId: "S002", date: "2023-01-01", status: "Absent" },
    // Add more attendance records here
  ];

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

export default AttendanceList;
