import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItemButton component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton component={Link} to="/students/list">
          <ListItemText primary="Students" />
        </ListItemButton>
        <ListItemButton component={Link} to="/teachers/list">
          <ListItemText primary="Teachers" />
        </ListItemButton>
        <ListItemButton component={Link} to="/fees/list">
          <ListItemText primary="Fees" />
        </ListItemButton>
        <ListItemButton component={Link} to="/attendance/report">
          <ListItemText primary="Attendance" />
        </ListItemButton>
        <ListItemButton component={Link} to="/grades/report">
          <ListItemText primary="Grades" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};

export default Sidebar;
