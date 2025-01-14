import React from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/students/list">
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/teachers/list">
          <ListItemText primary="Teachers" />
        </ListItem>
        <ListItem button component={Link} to="/fees/list">
          <ListItemText primary="Fees" />
        </ListItem>
        <ListItem button component={Link} to="/attendance/report">
          <ListItemText primary="Attendance" />
        </ListItem>
        <ListItem button component={Link} to="/grades/report">
          <ListItemText primary="Grades" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
