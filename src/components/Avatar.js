import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function AvatarLogo() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar style = {{backgroundColor: "black"}} src="/broken-image.jpg" />
     
    </Stack>
  );
}