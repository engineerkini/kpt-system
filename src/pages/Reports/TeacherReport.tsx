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

const TeacherReport: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState<any[]>([]);

  const handleGenerateReport = () => {
    // Implement report generation logic here
    const data = [
      {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        subject: "Math",
        hireDate: "2023-01-01",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Smith",
        subject: "Science",
        hireDate: "2023-01-15",
      },
      // Add more report data here
    ];
    setReportData(data);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Teacher Report</Typography>
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
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Hire Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((teacher) => (
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
      )}
    </Box>
  );
};

export default TeacherReport;
