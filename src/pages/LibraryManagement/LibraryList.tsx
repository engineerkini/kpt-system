import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import LibraryDetails from "./LibraryDetails";

const LibraryList: React.FC = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Book One",
      author: "Author One",
      isbn: "1234567890",
      available: true,
    },
    {
      id: 2,
      title: "Book Two",
      author: "Author Two",
      isbn: "0987654321",
      available: false,
    },
    // Add more books here
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  const handleSelectBook = (book: any) => {
    setSelectedBook(book);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedBook(null)}
      >
        Add New Book
      </Button>
      {selectedBook ? (
        <LibraryDetails book={selectedBook} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Author</TableCell>
                <TableCell>ISBN</TableCell>
                <TableCell>Available</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.map((book) => (
                <TableRow key={book.id}>
                  <TableCell>{book.title}</TableCell>
                  <TableCell>{book.author}</TableCell>
                  <TableCell>{book.isbn}</TableCell>
                  <TableCell>{book.available ? "Yes" : "No"}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelectBook(book)}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default LibraryList;
