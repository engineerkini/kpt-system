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

const GradeReport: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState([]);

  const handleGenerateReport = () => {
    // Implement report generation logic here
    const data = [
      {
        id: 1,
        studentId: "S001",
        subject: "Math",
        score: 95,
        date: "2023-01-01",
      },
      {
        id: 2,
        studentId: "S002",
        subject: "Science",
        score: 88,
        date: "2023-01-15",
      },
      // Add more report data here
    ];
    setReportData(data);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Grade Report</Typography>
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
                <TableCell>Subject</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((grade) => (
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
      )}
    </Box>
  );
};

export default GradeReport;
