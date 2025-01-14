import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const Login: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h6">Login</Typography>
      <TextField label="Email" type="email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </Box>
  );
};

export default Login;
