import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const GeneralSettings: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">General Settings</Typography>
      <TextField label="Site Name" fullWidth margin="normal" />
      <TextField label="Site URL" fullWidth margin="normal" />
      <Button variant="contained" color="primary">Save</Button>
    </Box>
  );
};

export default GeneralSettings;