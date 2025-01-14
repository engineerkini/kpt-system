import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

const Pagination: React.FC<{
  count: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}> = ({ count, page, onChange }) => {
  return <MuiPagination count={count} page={page} onChange={onChange} />;
};

export default Pagination;
