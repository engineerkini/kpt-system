import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const LibraryForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishedDate, setPublishedDate] = useState("");

  const handleAddBook = () => {
    // Implement add book logic here
    alert(
      `Book added: Title: ${title}, Author: ${author}, ISBN: ${isbn}, Published Date: ${publishedDate}`
    );
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Add Book</Typography>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="ISBN"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Published Date"
        type="date"
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Add Book
      </Button>
    </Box>
  );
};

export default LibraryForm;
