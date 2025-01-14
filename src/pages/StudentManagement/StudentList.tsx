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
import StudentDetails from "./StudentDetails";

const StudentList: React.FC = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "2005-01-01",
      grade: "10",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: "2006-02-15",
      grade: "9",
    },
    // Add more students here
  ]);

  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleSelectStudent = (student: any) => {
    setSelectedStudent(student);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedStudent(null)}
      >
        Add New Student
      </Button>
      {selectedStudent ? (
        <StudentDetails student={selectedStudent} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.firstName}</TableCell>
                  <TableCell>{student.lastName}</TableCell>
                  <TableCell>{student.dateOfBirth}</TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelectStudent(student)}
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

export default StudentList;
