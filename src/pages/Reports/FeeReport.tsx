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

const FeeReport: React.FC = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState<any[]>([]);

  const handleGenerateReport = () => {
    // Implement report generation logic here
    const data = [
      { id: 1, name: "Tuition Fee", amount: 500, dueDate: "2023-01-01" },
      { id: 2, name: "Library Fee", amount: 100, dueDate: "2023-01-15" },
      // Add more report data here
    ];
    setReportData(data);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Fee Report</Typography>
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
                <TableCell>Fee Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reportData.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.name}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>{fee.dueDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default FeeReport;
