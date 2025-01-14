import React from "react";
import { Modal as MuiModal, Box, Typography, Button } from "@mui/material";

const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}> = ({ open, onClose, title, children }) => {
  return (
    <MuiModal open={open} onClose={onClose}>
      <Box
        p={3}
        bgcolor="white"
        style={{ margin: "auto", marginTop: "10%", width: "50%" }}
      >
        <Typography variant="h6">{title}</Typography>
        {children}
        <Button
          variant="contained"
          color="primary"
          onClick={onClose}
          style={{ marginTop: "16px" }}
        >
          Close
        </Button>
      </Box>
    </MuiModal>
  );
};

export default Modal;
