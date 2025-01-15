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
import FeeDetail from "./FeeDetails";

const FeeList: React.FC = () => {
  const [fees, setFees] = useState([
    { id: 1, name: "Tuition Fee", amount: 500, dueDate: "2023-01-01" },
    { id: 2, name: "Library Fee", amount: 100, dueDate: "2023-01-15" },
    { id: 3, name: "Sports Fee", amount: 150, dueDate: "2023-02-01" },
  ]);

  const [selectedFee, setSelectedFee] = useState(null);

  const handleSelectFee = (fee: any) => {
    setSelectedFee(fee);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setSelectedFee(null)}
      >
        Add New Fee
      </Button>
      {selectedFee ? (
        <FeeDetail fee={selectedFee} />
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Fee Name</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fees.map((fee) => (
                <TableRow key={fee.id}>
                  <TableCell>{fee.name}</TableCell>
                  <TableCell>{fee.amount}</TableCell>
                  <TableCell>{fee.dueDate}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSelectFee(fee)}
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

export default FeeList;
