import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import working from '../resources/working.jpg'
import { useNavigate } from 'react-router-dom';

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

export default function Login() {

  const navigate = useNavigate();

  const [pubKey, setPubKey] = React.useState()
  const [priKey, setPriKey] = React.useState()

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const handleKeyChange = (e) => {
    if(e.target.name == 'publickey') {
      setPubKey(e.target.value)
    }  
    if(e.target.name == 'privatekey') {
      setPriKey(e.target.value)
    }
  }

  const hanldeLogin = (event) => {
    // const data = new FormData(event.currentTarget);
    // console.log(priKey)
    // console.log(pubKey)
    // if((pubKey === '833dee5') && (priKey === '6159bc7')) {
    //   alert("Correct")
    //   console.log('correct')
    // } else {
    //   alert("maa chuda")
    //   console.log('incorrect')
    // }
    navigate('/')
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${working})`,
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
            <Typography component="h1" variant="h5" href="/Homepage">
              Sign in
            </Typography>
            <Box noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="publicKey"
                label="Public Key"
                name="publicKey"
                autoComplete="publicKey"
                autoFocus
                onChange={handleKeyChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="privatekey"
                label="Private Key"
                type="password"
                id="privateKey"
                autoComplete="privateKey"
                onChange={handleKeyChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={hanldeLogin}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link href="./signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}