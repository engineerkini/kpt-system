import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ApplicationSettings: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Application Settings</Typography>
      <TextField label="Email Notifications" fullWidth margin="normal" />
      <TextField label="SMS Notifications" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Save
      </Button>
    </Box>
  );
};

export default ApplicationSettings;
