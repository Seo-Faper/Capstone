import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import SnackbarContent from "@mui/material/SnackbarContent";
import { ButtonGroup } from "@mui/material";

export default function DenseTable() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    /*
    const url = `http://112.168.85.171:8000/dashboard/`;
    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.RecentReport.Reports);
      });*/
   
    };
  //fetchData();
  useEffect(()=>{
    setData([
      {
          "Date": "2022-11-24",
          "Checked": 12,
          "Detected": 4
      },
      {
          "Date": "2022-11-23",
          "Checked": 8,
          "Detected": 0
      },
      {
        "Date": "2022-11-30",
        "Checked": 5,
        "Detected": 7
    },
    {
      "Date": "2022-12-01",
      "Checked": 6,
      "Detected": 7
  },
  {
    "Date": "2022-12-02",
    "Checked": 6,
    "Detected": 10
},
{
  "Date": "2022-12-04",
  "Checked": 15,
  "Detected": 27
},
  ]);
  },[]);

  console.log(data);
  const tableRows = data.map((item, index) => {
    
  });
  console.log(tableRows)
  return <Stack spacing={2.3}>   
  {Array.from(data).map((item)=>(
<SnackbarContent
  message={item.Date}
  action={<Stack spacing={2} direction="row">
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
</Stack>}
/>
  ))}
</Stack>;
}
