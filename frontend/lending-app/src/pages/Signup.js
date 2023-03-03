import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react'
import axios from 'axios'

const theme = createTheme();

export default function Signup() {

  const [clicked, setClicked] = useState(false);
  const [publicKey, setPublicKey] = useState();
  const [privateKey, setPrivateKey] = useState();

  const handleClick = () => {
    if(clicked) {
        alert("You have already generated your keys")
    } else {
        setClicked(true);
        setPublicKey(crypto.randomUUID().substring(1,8))
        setPrivateKey(crypto.randomUUID().substring(1,8))
        axios.post()
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 20,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box>
                <Button variant='contained' onClick={handleClick} sx={{marginTop:'2rem'}}>Generate Keys</Button>
                {
                    clicked &&
                    <div>
                        <Typography sx={{paddingTop:'2rem'}} variant='h6'>Public Key : {publicKey}</Typography>
                        <Typography sx={{paddingTop:'1rem'}} variant='h6'>Private Key : {privateKey}</Typography>
                        <Typography sx={{paddingTop:'2rem'}} >Attention: Remember your keys, do save them somewhere, if lost the keys keys cannot be recovered.</Typography>
                    </div>
                }
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}