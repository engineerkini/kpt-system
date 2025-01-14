import React from "react";
import { Box, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box p={3} bgcolor="primary.main" color="white" textAlign="center">
      <Typography variant="body1">© 2023 School Management System</Typography>
    </Box>
  );
};

export default Footer;
