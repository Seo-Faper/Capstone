import React, { useState } from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../index.css";
import Sidenav from "../Sidenav";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useTheme } from '@mui/material/styles';
import data from "../scanning_data.json"
import CheckList from "../CheckList";

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SnackbarContent from '@mui/material/SnackbarContent';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';

import IconButton from '@mui/material/IconButton';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';


function Scanning_Start() {
  const theme = useTheme();
  let request_body = { "checkedCount": 0,
  "checkedList": [[]
  ]
}
  const [count, setCount] = useState([[],[],[],[],[],[],[],[],[]]);
  const resultCount=()=> {
    let sum = 0;
    for(var i = 0; i<9; i++){
      sum +=count[i].length;
    }
    return sum;
  };
  const resultPrint = (
    <Typography component="div" variant="h5">
    {resultCount()+" 개 선택됨"}
  </Typography>

  );
  const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );
  return (
    <div>
      <ButtonAppBar></ButtonAppBar>
      <div className="Sidebar">
        <Sidenav></Sidenav>
        <Box
      sx={{
          m: 1,
          padding: '10px',
          width: '100%',
          height: '100%',
        
      }}
    >
      <Paper elevation={3}
      sx={{height: '100%', display:"flex"}}>
        <div style={{height: 900, overflow: "auto", width: '70%'}}>
          <Menu>{
          Array.from(Object.keys(data.ScanningList)).map((e,i)=>(
            <Typography component="div" variant="h5"><SubMenu label={e+" ("+count[i].length+"/"+data.ScanningList[e].length+")"}>
            <MenuItem style={{height: "100%" }} id="list-item">
              <CheckList tagName={data.ScanningList[e]} setCount={setCount} index={i}></CheckList>
            </MenuItem>
          </SubMenu>
          </Typography>
          ))
          }
          </Menu>

        </div>
        <div style={{width: "30%", display:"flex"}}>
          <Paper elevation={3}
          sx={{width: "100%"}}>
            
                <Stack spacing={2} sx={{ maxWidth: 600, padding: 5}}>
      <SnackbarContent message={resultPrint} />
      <Card sx={{ display: 'flex' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          
          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 50, width: 50 }} />
          </IconButton>
          <Typography component="div" variant="h5">
            Start Scanning
          </Typography>
        </Box>
      </Box>
    </Card>
    </Stack>
    </Paper>
  </div>
</Paper>

</Box>
      </div>
    </div>
  );
}

export default Scanning_Start;
