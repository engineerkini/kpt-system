import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import FeeCard from "../../components/fee/FeeCard";

const FeeList: React.FC = () => {
  const [fees, setFees] = useState([
    { id: 1, name: "Tuition Fee", amount: 500, dueDate: "2023-01-15" },
    { id: 2, name: "Library Fee", amount: 50, dueDate: "2023-01-20" },
    // Add more fees here
  ]);

  return (
    <Box p={3}>
      <Typography variant="h6">Fee List</Typography>
      <Grid container spacing={2}>
        {fees.map((fee) => (
          <Grid item xs={12} sm={6} md={4} key={fee.id}>
            <FeeCard fee={fee} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeeList;
