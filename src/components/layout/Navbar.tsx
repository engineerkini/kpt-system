import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          School Management System
        </Typography>
        <Button color="inherit" component={Link} to="/dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/students/list">
          Students
        </Button>
        <Button color="inherit" component={Link} to="/teachers/list">
          Teachers
        </Button>
        <Button color="inherit" component={Link} to="/fees/list">
          Fees
        </Button>
        <Button color="inherit" component={Link} to="/attendance/report">
          Attendance
        </Button>
        <Button color="inherit" component={Link} to="/grades/report">
          Grades
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
