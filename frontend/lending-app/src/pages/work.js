import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './Components/appbar'
import { cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';
import working from '../resources/working.jpg';

const mdTheme = createTheme({
  palette: {
    primary: {
      main: '#009da1',
    },
    secondary: {
      main: cyan[500],
    },
  },
  text: {
      primary: {
          main: '#FFFFFF',
      },
      secondary: {
          main: cyan[500],
      }
  }
});


export default function Work() {
  return (
    <ThemeProvider theme={mdTheme}>
    <div>
      <div>
          <AppBar/>
          
          <Typography
              component="h5"
              variant="h6"
              color='#243B4A'
              noWrap
              fontWeight={700}
              fontSize={30}
              textAlign='left'
              sx={{ flexGrow: 0, mb: 2, mt: 14, ml: 5 }}
            >
            
              {/* <img src={working}> */}
              <HelpRoundedIcon sx={{mr: 3}}/>
                How P2P works
              {/* </img> */}
          </Typography>
        </div>
        <div>
            <Typography
                component="h5"
                variant="h6"
                color='#2D4654'
                noWrap
                fontWeight={600}
                fontSize={25}
                textAlign='left'
                sx={{ flexGrow: 0, mb: 3, mt: 10, ml: 6 }}
            >
                P2P joins Borrowers and Lenders
            </Typography>
        </div>
        <div>
            <Typography
            textAlign='left'
            sx={{ flexGrow: 0, mb: 2, ml: 6, width: '40%' }}
            >
                P2P is a peer-to-peer lending platform, an alternative to traditional loans and investing
                options. We cut out the middleman to connect people who need money with those who have money to
                invest. This results in a win-win situation for both investors and borrowers with borrowers
                getting funded easily and investors earning great returns. We also provide advance level of security 
                using our Blockchain based backend where neither we nor the lenders can have access to your private details!
            </Typography>
        </div>
    </div>
    </ThemeProvider>
  );
}

