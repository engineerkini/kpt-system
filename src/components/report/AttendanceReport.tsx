import React from "react";
import { Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { text: "Dashboard", path: "/dashboard" },
  { text: "Students", path: "/students/list" },
  { text: "Teachers", path: "/teachers/list" },
  { text: "Fees", path: "/fees/list" },
  { text: "Attendance", path: "/attendance/report" },
  { text: "Grades", path: "/grades/report" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Drawer variant="permanent" anchor="left" aria-label="sidebar">
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            aria-label={item.text}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
