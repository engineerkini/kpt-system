import React from "react";
import { Box, Typography, Button } from "@mui/material";

const LibraryDetails: React.FC<{
  book: {
    id: number;
    title: string;
    author: string;
    isbn: string;
    available: boolean;
  };
}> = ({ book }) => {
  const handleEditBook = () => {
    // Implement edit book logic here
    alert(`Edit book: ${book.title}`);
  };

  const handleDeleteBook = () => {
    // Implement delete book logic here
    alert(`Delete book: ${book.title}`);
  };

  return (
    <Box p={3}>
      <Typography variant="h6">Book Details</Typography>
      <Typography variant="body1">Title: {book.title}</Typography>
      <Typography variant="body1">Author: {book.author}</Typography>
      <Typography variant="body1">ISBN: {book.isbn}</Typography>
      <Typography variant="body1">
        Available: {book.available ? "Yes" : "No"}
      </Typography>
      <Button variant="contained" color="primary" onClick={handleEditBook}>
        Edit Book
      </Button>
      <Button variant="contained" color="secondary" onClick={handleDeleteBook}>
        Delete Book
      </Button>
    </Box>
  );
};

export default LibraryDetails;
