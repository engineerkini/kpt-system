import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Overview: React.FC = () => {
  return (
    <Paper elevation={3} style={{ padding: '16px' }}>
      <Typography variant="h6">Overview</Typography>
      <Box mt={2}>
        <Typography variant="body1">Total Students: 120</Typography>
        <Typography variant="body1">Total Teachers: 15</Typography>
        <Typography variant="body1">Total Fees Collected: $5000</Typography>
        {/* Add more overview details here */}
      </Box>
    </Paper>
  );
};

export default Overview;