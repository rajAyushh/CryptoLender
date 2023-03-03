import React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import './homepage.css'; // import the CSS file
import AppBar from './Components/appbar'
import { blue, cyan } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';  

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


export default function HomePage() {
  const [opt, setOpt] = React.useState('');

  const handleChange = (event) => {
    setOpt(event.target.value);
  };
  
  return (
    <ThemeProvider theme={mdTheme}>
    <div className='main'>
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
          <FormControl sx={{width: 500, mb:2}}>
            <InputLabel id="sort by">Sort By</InputLabel>
            <Select
              labelId="sort by"
              id="sorter"
              value={opt}
              label="options"
              onChange={handleChange}
            >
              <MenuItem value={10}>Amount</MenuItem>
              <MenuItem value={20}>Interest Rate</MenuItem>
              <MenuItem value={30}>Payback Period</MenuItem>
              <MenuItem value={40}>Price: High to Low</MenuItem>
              <MenuItem value={50}>Price: Low to High</MenuItem>
            </Select>
          </FormControl>
          <div className='postings'>
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

