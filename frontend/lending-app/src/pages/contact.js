import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from './Components/appbar'
import { cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import contact from '../resources/Contact.png';
import './contact.css';

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


export default function Contact() {
  return (
    <ThemeProvider theme={mdTheme}>
    <div>
      <div>
          <AppBar/>
          <div className='img'>
          <img src={contact}/>
          </div>
          
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
    </div>
    </ThemeProvider>
  );
}

