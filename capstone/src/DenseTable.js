import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { ButtonGroup } from "@mui/material";

export default function DenseTable() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    const url = `http://112.168.85.171:8000/dashboard/`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.RecentReport.Reports);
      });
  };
  fetchData();
  //console.log(data);
  const tableRows = data.map((item, index) => {
   // console.log(item);
    <SnackbarContent
      message={item.Date}
      action={
        <Stack spacing={2} direction="row">
          <ButtonGroup>
            <Button variant="contained" color="success">
              C
            </Button>
            <Button variant="text" color="success">
              {item.Checked}
            </Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button variant="contained">D</Button>
            <Button variant="text">{item.Detected}</Button>
          </ButtonGroup>
        </Stack>
      }
    />;
  });
  return <Stack spacing={2.3}>{tableRows}</Stack>;
}
