import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader: React.FC<{ message?: string }> = ({ message = "Loading..." }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgcolor="rgba(0, 0, 0, 0.1)"
    >
      <CircularProgress size={60} />
      <Typography variant="h6" style={{ marginTop: "16px" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default Loader;
