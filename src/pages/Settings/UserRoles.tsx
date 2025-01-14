import React, { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const UserRoles: React.FC = () => {
  const [roles, setRoles] = useState<string[]>(["Admin", "Teacher", "Student"]);
  const [newRole, setNewRole] = useState("");

  const handleAddRole = () => {
    if (newRole) {
      setRoles([...roles, newRole]);
      setNewRole("");
    }
  };

  const handleDeleteRole = (role: string) => {
    setRoles(roles.filter((r) => r !== role));
  };

  return (
    <Box p={3}>
      <Typography variant="h6">User Roles</Typography>
      <TextField
        label="New Role"
        value={newRole}
        onChange={(e) => setNewRole(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddRole}>
        Add Role
      </Button>
      <List>
        {roles.map((role, index) => (
          <ListItem key={index}>
            <ListItemText primary={role} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteRole(role)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UserRoles;
