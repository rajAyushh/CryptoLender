import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import './homepage.css'; // import the CSS file
import AppBar from './Components/appbar'
import { blue, cyan } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

const sortBy = [
  {label: 'Price: Low to High'},
  {label: 'Price: High to Low'},
  {label: 'Amount'},
  {label: 'Interest Rate'},
  {label: 'Payback Period'}
];

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


function HomePage() {
  return (
    <ThemeProvider theme={mdTheme}>
    <div>
      <div className="container">
        <div>
          <AppBar/>
          <Typography
              component="h5"
              variant="h6"
              color='#009da1'
              noWrap
              marginTop={5}
              fontWeight={700}
              fontSize={50}
              sx={{ flexGrow: 0, mb: 2 }}
            >
              Welcome to P2P
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sortBy}
            
            sx={{ width: 300, ml: 30}}
            renderInput={(params) => <TextField {...params} label="Sort By" />}
          />
          <div className="postings">
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
            <div className="posting">
              <img src="https://via.placeholder.com/150" alt="Posting Image" />
              <div>
                <h2>Posting Title</h2>
                <p>Posting Description</p>
                <p>Posting Price</p>
                <div>
                  <button>Borrow</button>
                  <button>Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default HomePage;
