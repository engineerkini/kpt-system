import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const Notification: React.FC = () => {
  const notifications = [
    { id: 1, message: "New student registered" },
    { id: 2, message: "Fee payment received" },
    { id: 3, message: "Library book returned" },
    // Add more notifications here
  ];

  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6">Notifications</Typography>
      <List>
        {notifications.map((notification) => (
          <ListItem key={notification.id}>
            <ListItemText primary={notification.message} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default Notification;
