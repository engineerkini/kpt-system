import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const AttendanceReport: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([]);

  const handleGenerateReport = () => {
    // Implement report generation logic here
    const data = [
      { id: 1, studentId: "S001", date: "2023-01-01", status: "Present" },
      { id: 2, studentId: "S002", date: "2023-01-02", status: "Absent" },
      // Add more report data here
    ];
    setReportData(data);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Attendance Report</Typography>
      <TextField
        label="Start Date"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="End Date"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleGenerateReport}
      >
        Generate Report
      </Button>
      {reportData.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: "16px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((attendance) => (
                <TableRow key={attendance.id}>
                  <TableCell>{attendance.studentId}</TableCell>
                  <TableCell>{attendance.date}</TableCell>
                  <TableCell>{attendance.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default AttendanceReport;
