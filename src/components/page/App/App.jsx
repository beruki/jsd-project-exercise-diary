import { Box, createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import './App.css'


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
        <Button className='Secondary-Button' style={{width: 300}} variant="outlined">Outlined</Button>
      </Stack>
      </Box>
    </ThemeProvider>
  );
}
