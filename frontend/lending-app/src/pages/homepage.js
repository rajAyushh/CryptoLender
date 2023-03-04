import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import working from '../resources/monii.jpg'
import AppBar from './Components/appbar'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import lender from '../resources/give.jpg';
import borrow from '../resources/loan.jpg';
import doggo from '../resources/doggo.jpg';
import Divider from '@mui/material/Divider';
import { useNavigate, Link } from 'react-router-dom';



const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#009da1',
    },
    
  },
  text: {
      primary: {
          main: '#FFFFFF',
      },
      
  }
});



export default function HomePage() {
  const navigate = useNavigate();

  function openLend(event) {
    event.preventDefault();
  
    navigate('/listing');
  }
  
  function openBorrow(event) {
    event.preventDefault();
  
    navigate('/borrow');
  }

  return (
    <ThemeProvider theme={mdTheme}>
    <div textAlign='center'>
    <AppBar/>
    <Paper
      sx={{
        backgroundColor: 'grey.800',
        color: '#fff',
        width: '100%',
        mt: 9,
        mb: 5,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${working})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none', width: '100%' }} src={working} alt='none' />}
      <Box
        sx={{
          position: 'absolute',
          top: 10,
          bottom: 0,
          right: 0,
          left: 0,
          // backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={100}>
          <Box
            sx={{
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="#254441" gutterBottom fontWeight={700} fontFamily= 'Helvetica Neue' sx={{textShadow: "1px 1px 3px #fff"}}>
              P2P: The Lending Borrowing Solution
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    <Grid container>
    <Divider/>
    <Card sx={{ maxWidth: 345, margin: 5 }} onClick={openBorrow}>
      <CardActionArea >
        <CardMedia
          component="img"
          height="140"
          image={borrow}
          alt="borrow money"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Borrow Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Borrow money from trusted lenders for minimun interest rates.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345, margin: 5 }} onClick={openLend}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={lender}
          alt="lend money"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lend Money
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lend your money to get a borrower and get fixed returns.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    {/* <Card sx={{ maxWidth: 345, margin: 5 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={doggo}
          alt="dog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cute
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Coz doggos are cute n u are too! And this is not responsive like a sad doggo
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card> */}
    </Grid>
    </div>
    </ThemeProvider>
  );
}

