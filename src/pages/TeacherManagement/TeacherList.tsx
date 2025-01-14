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
import TeacherDetails from "./TeacherDetails";

const TeacherList: React.FC = () => {
  const [teachers, setTeachers] = useState([
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
    // Add more teachers here
  ]);

  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleSelectTeacher = (teacher: any) => {
    setSelectedTeacher(teacher);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedTeacher(null)}
      >
        Add New Teacher
      </Button>
      {selectedTeacher ? (
        <TeacherDetails teacher={selectedTeacher} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Subject</TableCell>
                <TableCell>Hire Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {teachers.map((teacher) => (
                <TableRow key={teacher.id}>
                  <TableCell>{teacher.firstName}</TableCell>
                  <TableCell>{teacher.lastName}</TableCell>
                  <TableCell>{teacher.subject}</TableCell>
                  <TableCell>{teacher.hireDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelectTeacher(teacher)}
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

export default TeacherList;
