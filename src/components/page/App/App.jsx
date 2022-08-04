import { Box, createTheme, ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { TextField } from '@mui/material';
import * as React from 'react';
import './App.css';
import '../../button/button.css';
import AllCard from '../../card/AllCard';

export default function App() {
  const theme = createTheme({
    
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <h1>Your Activities</h1>
        <Button className='Secondary-Button' sx={{borderColor: 'rgba(178, 31, 31, 1)'}} variant="outlined">Add your data</Button>
      </Box>
      <AllCard />
    </ThemeProvider>
  );
}
