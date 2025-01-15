import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Divider,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import ClassIcon from "@mui/icons-material/Class";
import PaidIcon from "@mui/icons-material/Paid";
import SchoolIcon from "@mui/icons-material/School";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const Sidebar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false); // Manage auth state

  const handleLogout = () => {
    setIsAuthenticated(false);
    // Add logic to clear user session or token
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          height: "100vh", // Full height
          display: "flex",
          flexDirection: "column", // Column layout
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{ flexGrow: 1 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard">
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/students/list">
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/teachers/list">
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/fees/list">
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Fees" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/attendance/report">
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/grades/report">
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Grades" />
          </ListItemButton>
        </ListItem>
      </List>

      <Divider />

      {/* Auth Section at the bottom */}
      <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <List>
          {!isAuthenticated ? (
            <>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/login">
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/register">
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <ListItemText primary="Register" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
