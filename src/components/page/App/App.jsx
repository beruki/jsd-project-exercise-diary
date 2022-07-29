import { Box, createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import * as React from 'react';
import './App.css'
import '../../button/button.css'

export default function App() {
  const theme = createTheme({
    
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* SX */}
      <Stack spacing={2} direction="row">
        <Button className='Text-Button' variant="text">Text</Button>
        <Button className='Primary-Button' sx={{width: 300}} variant="contained">Contained</Button>
        <Button className='Secondary-Button' sx={{borderColor: 'rgba(178, 31, 31, 1)'}} variant="outlined">Outlined</Button>
      </Stack>

        {/* SX */}
      <Stack spacing={2} direction="row">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Stack>

      </Box>
    </ThemeProvider>
  );
}
