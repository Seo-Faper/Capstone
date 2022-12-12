import React from "react";
import ButtonAppBar from "../ButtonAppBar";
import "../index.css";
import Sidenav from "../Sidenav";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import data from "../scanning_data.json"
import request from "../scanning_request.json"
function Scanning_Start() {
  console.log(data)
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };


  console.log(data.ScanningList.Certificate);
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
          height: '90%',
        
      }}
    >
      <Paper elevation={3}
      sx={{height: '100%'}}>
  <Menu>
    <SubMenu label={<FormControlLabel
    label="Credential"
    control={
      <Checkbox
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        onChange={handleChange1}
      />
    }
  />}>

      {
      Array.from(data.ScanningList.Credential).map((e,index)=>(
        
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>  
      <MenuItem><FormControlLabel
        label={e.id+"\t"+e.Description+"\t"+e.Detail}
        control={<Checkbox checked={checked[index]} onChange={handleChange2} />}
        
      /></MenuItem>
    </Box>
      ))   

    
    }
    </SubMenu>
    <SubMenu label={<FormControlLabel
    label="MFA"
    control={
      <Checkbox
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        onChange={handleChange1}
      />
    }
  />}>

      {
      Array.from(data.ScanningList.MFA).map((e,index)=>(
        
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>  
      <MenuItem><FormControlLabel
        label={e.id+"\t"+e.Description+"\t"+e.Detail}
        control={<Checkbox checked={checked[index]} onChange={handleChange2} />}
        
      /></MenuItem>
    </Box>
      ))   

    
    }
    </SubMenu>
    <SubMenu label={<FormControlLabel
    label="PW"
    control={
      <Checkbox
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        onChange={handleChange1}
      />
    }
  />}>

      {
      Array.from(data.ScanningList.PW).map((e,index)=>(
        
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>  
      <MenuItem><FormControlLabel
        label={e.id+"\t"+e.Description+"\t"+e.Detail}
        control={<Checkbox checked={checked[index]} onChange={handleChange2} />}
        
      /></MenuItem>
    </Box>
      ))   

    
    }
    </SubMenu>
    <SubMenu label={<FormControlLabel
    label="Certificate"
    control={
      <Checkbox
        checked={checked[0] && checked[1]}
        indeterminate={checked[0] !== checked[1]}
        onChange={handleChange1}
      />
    }
  />}>

      {
      Array.from(data.ScanningList.Certificate).map((e,index)=>(
        
      <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>  
      <MenuItem><FormControlLabel
        label={e.id+"\t"+e.Description+"\t"+e.Detail}
        control={<Checkbox checked={checked[index]} onChange={handleChange2} />}
        
      /></MenuItem>
    </Box>
      ))   

    
    }
    </SubMenu>
  </Menu>
      
        </Paper>
    </Box>
      </div>
    </div>
  );
}

export default Scanning_Start;
