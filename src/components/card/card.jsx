import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Chip from '@mui/material/Chip';
import './App.css';

export default function All_Card() {
    const theme = createTheme({
      
    });
  
    return ( 
  
      <Box display="flex" flexDirection="row" alignItems="stretch" padding={16}>
        <Stack>
          <Card sx={{ maxWidth: 345 , maxHeight: 500 }} className='Run-card'>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="12 Jun 2022"
            title="Run for mom"
          />
  
          <CardMedia
            component="img"
            height="188"
            image="../../../../public/run-desk.png"
            alt="running"
          />
  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            วิ่งที่สวนลุม เหนื่อยมาก 
            </Typography>
            <br />
            <Typography variant="body2" className='Calories'>
            Calories 800 kcal 🔥 
            </Typography>
            <br />
            <Chip label="Run" color="primary" className='Tag-run' />
          </CardContent>
          </Card>
        </Stack>
  
        <Stack>
        <Card sx={{ maxWidth: 345 , maxHeight: 500 }} className='Swim-card'>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="12 Jun 2022"
            title="Swim at party"
          />
  
          <CardMedia
            component="img"
            height="188"
            image="../../../../public/swim-desk.png"
            alt="swimming"
          />
  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            ว่ายน้ำที่ปาร์ตี้ เหนื่อยมากๆๆๆ
            </Typography>
            <br />
            <Typography variant="body2" className='Calories'>
            Calories 800 kcal 🔥  
            </Typography>
            <br />
            <Chip label="Swim" color="primary" className='Tag-swim' />
          </CardContent>
          </Card>
        </Stack>
  
        <Stack>
        <Card sx={{ maxWidth: 345 , maxHeight: 500 }} className='Hike-card'>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="12 Jun 2022"
            title="Hike at 12.00"
          />
  
          <CardMedia
            component="img"
            height="188"
            image="../../../../public/hiking-desk.png"
            alt="hiking"
          />
  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            ปีนให้ไกลไปให้ถึงจ้า
            </Typography>
            <br />
            <Typography variant="body2" className='Calories'>
            Calories 800 kcal 🔥  
            </Typography>
            <br />
            <Chip label="Hike" color="primary" className='Tag-hike' />
          </CardContent>
          </Card>
        </Stack>
  
        <Stack>
        <Card sx={{ maxWidth: 345 , maxHeight: 500 }} className='Bike-card'>
          <CardHeader 
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            subheader="12 Jun 2022"
            title="Bike for aunt"
          />
  
          <CardMedia
            component="img"
            height="188"
            image="../../../../public/ride-desk.png"
            alt="riding"
          />
  
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            ปั่น ปั่นจักรยาน
            </Typography>
            <br />
            <Typography variant="body2" className='Calories'>
            Calories 800 kcal 🔥  
            </Typography>
            <br />
            <Chip label="Ride" color="primary" className='Tag-ride' />
          </CardContent>
          </Card>
        </Stack>
      </Box>
    );
  }
  