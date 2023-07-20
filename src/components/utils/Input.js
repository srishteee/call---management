import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input(props) {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
    >
        <h3>{props.name}</h3>
      <TextField fullWidth label= {props.label} id={props.id} placeholder= "NA" />
    </Box>
  );
}