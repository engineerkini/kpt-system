import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import GradeDetail from "./GradeDetails";

const GradeList: React.FC = () => {
  const [grades, setGrades] = useState([
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
    {
      id: 3,
      studentId: "S003",
      subject: "History",
      score: 92,
      date: "2023-02-01",
    },
  ]);

  const [selectedGrade, setSelectedGrade] = useState(null);

  const handleSelectGrade = (grade: any) => {
    setSelectedGrade(grade);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedGrade(null)}
      >
        Add New Grade
      </Button>
      {selectedGrade ? (
        <GradeDetail grade={selectedGrade} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Student ID</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Score</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {grades.map((grade) => (
                <TableRow key={grade.id}>
                  <TableCell>{grade.studentId}</TableCell>
                  <TableCell>{grade.subject}</TableCell>
                  <TableCell>{grade.score}</TableCell>
                  <TableCell>{grade.date}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelectGrade(grade)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default GradeList;
