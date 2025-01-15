import React from "react";
import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          height: "100vh",
        },
      }}
    >
      <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <List sx={{ flexGrow: 1 }}>
          <ListItem component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem component={Link} to="/students/list">
            <ListItemText primary="Students" />
          </ListItem>
          <ListItem component={Link} to="/teachers/list">
            <ListItemText primary="Teachers" />
          </ListItem>
          <ListItem component={Link} to="/fees/list">
            <ListItemText primary="Fees" />
          </ListItem>
          <ListItem component={Link} to="/attendance/report">
            <ListItemText primary="Attendance" />
          </ListItem>
          <ListItem component={Link} to="/grades/report">
            <ListItemText primary="Grades" />
          </ListItem>
        </List>

        {/* Authentication links at the bottom */}
        <Box sx={{ mt: "auto" }}>
          <List>
            <ListItem component={Link} to="/login">
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem component={Link} to="/register">
              <ListItemText primary="Register" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
