import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const FeeTable: React.FC<{
  fees: { id: number; name: string; amount: number; dueDate: string }[];
}> = ({ fees }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fee Name</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Due Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fees.map((fee) => (
            <TableRow key={fee.id}>
              <TableCell>{fee.name}</TableCell>
              <TableCell>{fee.amount}</TableCell>
              <TableCell>{fee.dueDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FeeTable;
