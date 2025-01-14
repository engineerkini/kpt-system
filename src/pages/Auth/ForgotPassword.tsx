import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = () => {
    // Implement forgot password logic here
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Forgot Password</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleForgotPassword}
      >
        Send Reset Link
      </Button>
    </Box>
  );
};

export default ForgotPassword;
